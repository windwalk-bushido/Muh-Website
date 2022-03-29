import { getSortedProjectsData } from "../lib/projects";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Date from "../components/date";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio({ allProjectsData }) {
  return (
    <>
      <Head page_title="Milijan Mosić's Portfolio" />
      <Nav />
      <main className="flex flex-col justify-center items-center w-full">
        <h1 className="pt-12 mb-4 text-center text-5xl">Projects</h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-around w-full lg:w-9/12 mt-4 mb-20 pr-8 md:pr-0">
          {allProjectsData.map(({ id, thumbnail, title, date }) => (
            <Link href={`/portfolio/${id}`} key={id}>
              <div className="flex flex-col group w-full md:w-64 lg:w-80 m-4 mt-8 mb-8 rounded-xl shadow-xl transition duration-150 ease-out hover:cursor-pointer shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800 hover:bg-green-300 hover:text-black">
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
                    <div className="float-right mt-4">
                      <Date dateString={date} />
                    </div>
                  </div>
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
