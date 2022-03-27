import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center w-full bg-black text-white">
      <div className="flex justify-between items-center w-full lg:w-8/12 h-20 sm:h-12 pl-4 pr-4 lg:pl-0 lg:pr-0">
        <div>
          <p className="muh_name text-3xl mr-4">Milijan Mosić</p>
        </div>
        <div>
          <Link href="/">
            <a className="mr-0.5 p-2 rounded-lg shadow-lg transition duration-150 ease-out hover:bg-amber-300 hover:text-black">
              Blog
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="m-0.5 p-2 rounded-lg shadow-lg transition duration-150 ease-out hover:bg-amber-300 hover:text-black">
              Portfolio
            </a>
          </Link>
          <Link href="/donate">
            <a className="ml-0.5 p-2 rounded-lg shadow-lg transition duration-150 ease-out hover:bg-amber-300 hover:text-black">
              Donate
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
