import Link from "next/link";

export default function Nav() {
  return (
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
  );
}
