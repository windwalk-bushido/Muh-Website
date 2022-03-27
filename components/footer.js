export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-black text-white">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full lg:w-8/12 h-16 sm:h-12 pl-4 pr-4 lg:pl-0 lg:pr-0">
        <div>
          <a href="#" className="mr-2.5 sm:mr-6 transition duration-150 ease-out hover:underline hover:text-amber-300">
            Hosting
          </a>
          <a href="#" className="transition duration-150 ease-out hover:underline hover:text-amber-300">
            Domain
          </a>
          <a href="#" className="ml-2.5 sm:ml-6 transition duration-150 ease-out hover:underline hover:text-amber-300">
            Content Licence
          </a>
        </div>
        <p>2022.</p>
      </div>
    </footer>
  );
}
