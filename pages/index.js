import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Title from "../components/page_title";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Date from "../components/date";
import Bio from "../components/bio";
import Link from "next/link";
import Image from "next/image";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Title page_title="Milijan Mosić's Blog" />
      <Nav />
      <main className="flex flex-col justify-center items-center w-full">
        <Bio />
        <h1 className="mt-4 mb-4 text-center text-5xl">Articles</h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-center w-full lg:w-9/12 pr-8 md:pr-0 mt-4 mb-20">
          {allPostsData.map(({ id, thumbnail, title, date, description }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="group flex flex-col w-full md:w-80 lg:w-96 m-4 mt-8 mb-8 rounded-xl shadow-xl transition duration-150 ease-out hover:cursor-pointer shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800 hover:bg-green-300 hover:text-black">
                <div className="w-full">
                  <Image
                    src={thumbnail}
                    alt="thumbnail of an article"
                    width={92}
                    height={92}
                    layout="responsive"
                    className="rounded-tl-xl rounded-tr-xl"
                  />
                </div>
                <div className="flex flex-col justify-center w-full p-4">
                  <div>
                    <h2 className="text-3xl font-bold text-green-300 group-hover:text-black">{title}</h2>
                    <Date dateString={date} />
                  </div>
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
