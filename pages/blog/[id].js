import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Date from "../../components/date";

export default function Post({ postData }) {
  const pageTitle = postData.title + " - by Milijan Mosić";
  return (
    <>
      <Head page_title={pageTitle} />
      <Nav />
      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <article className="flex flex-col justify-center items-center w-full lg:w-8/12 mt-8 mb-16">
          <div className="mb-16 text-center">
            <h1 className="text-3xl font-bold">{postData.title}</h1>
            <Date dateString={postData.date} />
          </div>
          <div className="w-full break-all" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
