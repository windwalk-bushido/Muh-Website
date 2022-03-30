import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

import Title from "../../components/page_title";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Date from "../../components/date";
import Content from "../../components/article";

export default function Post({ postData }) {
  const pageTitle = postData.title + " - by Milijan Mosić";
  return (
    <>
      <Title page_title={pageTitle} />
      <Nav />
      <main className="flex justify-center items-center w-full">
        <article className="flex flex-col justify-center items-center w-full lg:w-9/12 mt-8 mb-20">
          <div className="mb-16 text-center">
            <h1 className="mt-4 mb-4 text-5xl font-bold">{postData.title}</h1>
            <Date dateString={postData.date} />
          </div>
          <Content article_content={postData.contentHtml} />
        </article>
      </main>
      <Footer />
    </>
  );
}
