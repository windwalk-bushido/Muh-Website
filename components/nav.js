import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center items-baseline w-full shadow-xl bg-black shadow-green-300/20">
      <div className="flex justify-between items-center md:items-baseline w-full lg:w-9/12 ml-4 lg:ml-0 mr-2  lg:mr-0">
        <div className="flex justify-start w-1/2 sm:w-full">
          <p className="muh_name text-3xl pt-2 pb-2">Milijan Mosić</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end items-end w-24 sm:w-full">
          <Link href="/">
            <a className="sm:mr-0.5 w-fit p-2 rounded-xl shadow-xl transition duration-150 ease-out hover:bg-green-300 hover:text-black">
              Blog
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="sm:ml-0.5 sm:mr-0.5 w-fit p-2 rounded-xl shadow-xl transition duration-150 ease-out hover:bg-green-300 hover:text-black">
              Portfolio
            </a>
          </Link>
          <Link href="/donate">
            <a className="sm:ml-0.5 w-fit p-2 rounded-xl shadow-xl transition duration-150 ease-out hover:bg-green-300 hover:text-black">
              Donate
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
