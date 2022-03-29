import { getAllProjectIds, getProjectData } from "../../lib/projects";

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Date from "../../components/date";
import Content from "../../components/article";

export default function Post({ projectData }) {
  const pageTitle = projectData.title + " - by Milijan Mosić";
  return (
    <>
      <Head page_title={pageTitle} />
      <Nav />
      <main className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center w-full lg:w-9/12 mt-8 mb-16">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold">{projectData.title}</h1>
            <Date dateString={projectData.date} />
          </div>
          <Content article_content={projectData.contentHtml} />
        </article>
      </main>
      <Footer />
    </>
  );
}
