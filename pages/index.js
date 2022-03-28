import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Date from "../components/date";
import Bio from "../components/bio";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head page_title="Milijan Mosić's Blog" />
      <Nav />
      <main className="flex flex-col justify-center items-center w-full bg-gray-900 text-white">
        <Bio />
        <h1 className="text-5xl text-center mt-4 mb-4">Articles</h1>
        <div className="flex flex-col justify-center w-full lg:w-8/12 mt-4 mb-20 pr-8">
          {allPostsData.map(({ id, title, date, description }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="group w-full p-4 m-4 rounded-xl shadow-xl transition duration-150 ease-out hover:cursor-pointer shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800 hover:bg-green-300 hover:text-black">
                <div>
                  <h2 className="text-3xl font-bold text-green-300 group-hover:text-black">{title}</h2>
                  <Date dateString={date} />
                </div>
                <div>
                  <p className="mt-8 text-lg">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
