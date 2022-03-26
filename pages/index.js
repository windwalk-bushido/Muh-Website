import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Muh Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat&display=swap" rel="stylesheet" />
      </Head>

      <nav className="flex justify-center items-center w-full bg-black text-white">
        <div className="flex justify-between items-center w-full lg:w-6/12 pl-4 pr-4 h-12">
          <div>
            <p className="muh_name text-3xl">Milijan Mosić</p>
          </div>
          <div>
            <Link href="/">
              <a className="mr-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">Blog</a>
            </Link>
            <Link href="/portfolio">
              <a className="ml-1.5 mr-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">Portfolio</a>
            </Link>
            <Link href="/donate">
              <a className="ml-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">Donate</a>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <div className="">Posts here</div>
      </main>

      <footer className="flex justify-center items-center w-full bg-black text-white">
        <div className="flex justify-between items-center w-full lg:w-6/12 pl-4 pr-4 h-12">
          <div>
            <a href="#" className="mr-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
              Hosting
            </a>
            <a href="#" className="ml-1.5 mr-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
              Domain
            </a>
            <a href="#" className="ml-1.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
              Content Licence
            </a>
          </div>
          <p>2022.</p>
        </div>
      </footer>
    </>
  );
}
