export default function Footer() {
  return (
    <footer className="flex justify-center w-full bg-black text-white">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full lg:w-8/12">
        <div className="m-4">
          <a
            href="#"
            className="mr-2.5 sm:mr-6 transition duration-150 ease-out underline hover:decoration-double hover:underline-offset-2 hover:text-green-300"
          >
            Hosting
          </a>
          <a
            href="#"
            className="transition duration-150 ease-out underline hover:decoration-double hover:underline-offset-2 hover:text-green-300"
          >
            Domain
          </a>
          <a
            href="#"
            className="ml-2.5 sm:ml-6 transition duration-150 ease-out underline hover:decoration-double hover:underline-offset-2 hover:text-green-300"
          >
            Content Licence
          </a>
        </div>
        <p className="mb-4 sm:m-4">2022.</p>
      </div>
    </footer>
  );
}
