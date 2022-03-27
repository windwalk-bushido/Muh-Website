import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Date from "../components/date";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head page_title="Milijan Mosić's Blog" />
      <Nav />
      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <div className="flex flex-col justify-center items-center w-full lg:w-8/12 mt-4 mb-4">
          {allPostsData.map(({ id, date, title, description }) => (
            <Link href={`/blog/${id}`}>
              <div
                key={id}
                className="group w-full p-4 m-4 rounded-xl shadow-lg transition duration-150 ease-out hover:cursor-pointer bg-gray-800 hover:bg-amber-300 hover:text-black"
              >
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-black">{title}</h3>
                  <Date dateString={date} />
                </div>
                <div>
                  <p className="mt-8">{description}</p>
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
