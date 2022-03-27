export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-black text-white">
      <div className="flex justify-between items-center w-full lg:w-6/12 pl-4 pr-4 h-12">
        <div>
          <a href="#" className="mr-2.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
            Hosting
          </a>
          <a href="#" className="m-2.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
            Domain
          </a>
          <a href="#" className="ml-2.5 transition duration-150 ease-out hover:underline hover:text-amber-300">
            Content Licence
          </a>
        </div>
        <p>2022.</p>
      </div>
    </footer>
  );
}
