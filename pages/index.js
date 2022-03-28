import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Date from "../components/date";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex justify-center items-center w-full pt-8 pb-16 bg-gray-900 text-white">
        <div className="flex justify-between items-start w-8/12">
          <Image src="/me.jpg" alt="picture of Milijan Mosić." width="2500" height="4000" className="rounded-xl shadow-xl" />
          <p className="ml-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mr-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <main className="flex flex-col justify-center items-center w-full bg-gray-900 text-white">
        <h1 className="text-5xl text-center mb-4">Articles</h1>
        <div className="flex flex-col justify-center items-center w-full lg:w-8/12 mt-4 mb-16">
          {allPostsData.map(({ id, date, title, description }) => (
            <Link href={`/blog/${id}`}>
              <div
                key={id}
                className="group w-full p-4 m-4 rounded-xl shadow-lg transition duration-150 ease-out hover:cursor-pointer shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800 hover:bg-green-300 hover:text-black"
              >
                <div>
                  <h2 className="text-3xl font-bold text-green-300 group-hover:text-black">{title}</h2>
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
