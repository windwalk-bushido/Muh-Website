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
          <Image src="/me.jpg" alt="picture of Milijan Mosić." width="1250" height="2000" className="rounded-xl shadow-xl" />
          <div className="ml-8">
            <p className="">
              Hello there, web developer here. Minimalist. Linux/BSD advocate. Cat lover. Currently unemployed and the student
              of vocational studies with major in e-business. I "fell in love" with computers 20 years ago and that's why the
              occuring problem is that I want to know everything about them... Right now I'm involved with learning{" "}
              <a
                href="https://tryhackme.com/p/windwalk"
                className="transition duration-150 ease-out underline text-green-300 hover:text-white"
              >
                cybersecurity
              </a>
              , writting Bash scripts for my{" "}
              <a
                href="https://archlinux.org/"
                className="transition duration-150 ease-out underline text-green-300 hover:text-white"
              >
                Arch Linux
              </a>{" "}
              rice,{" "}
              <a
                href="https://github.com/windwalk-bushido"
                className="transition duration-150 ease-out underline text-green-300 hover:text-white"
              >
                making websites
              </a>{" "}
              (Vue + Flask) and{" "}
              <a
                href="https://projecteuler.net/"
                className="transition duration-150 ease-out underline text-green-300 hover:text-white"
              >
                solving math problems
              </a>{" "}
              with Go lang. Also, I would like to get involved with Raspberry Pi and microcontrollers in the future.
            </p>
            <p className="mt-8">
              This blog is going to be about... everything. I would like to make single, online place for myself and to treat it
              kinda like public diary. At the same time, while writting, I should treat it also like whole world is watching...
              weird isn't it? Right now, man is divided between a lot of social media sites and that sucks. This website will
              serve the purpose of keeping all personal (past and future) posts in one place. To get in contact with me use{" "}
              <a
                href="mailto:milijan-mosic@protonmail.com"
                className="transition duration-150 ease-out underline text-green-300 hover:text-white"
              >
                milijan-mosic@protonmail.com
              </a>{" "}
              email.
            </p>
          </div>
        </div>
      </div>
      <main className="flex flex-col justify-center items-center w-full bg-gray-900 text-white">
        <h1 className="text-5xl text-center mb-4">Articles</h1>
        <div className="flex flex-col justify-center items-center w-full lg:w-8/12 mt-4 mb-16">
          {allPostsData.map(({ id, title, date, description }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="group w-full p-4 m-4 rounded-xl shadow-lg transition duration-150 ease-out hover:cursor-pointer shadow-green-300/20 hover:shadow-green-300/70 bg-gray-800 hover:bg-green-300 hover:text-black">
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
