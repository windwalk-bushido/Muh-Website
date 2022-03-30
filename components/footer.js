export function RenderWebsiteBirthday() {
  const current_year = new Date().getFullYear();
  if (current_year != 2022) {
    return <p className="mt-2 sm:mt-0 mb-4 sm:mb-0 sm:mr-4 lg:mr-0">2022 - {current_year}</p>;
  } else {
    return <p className="mt-2 sm:mt-0 mb-4 sm:mb-0 sm:mr-4 lg:mr-0">2022</p>;
  }
}

export default function Footer() {
  return (
    <footer className="flex justify-center w-full sm:h-12 bg-black">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center w-full lg:w-9/12">
        <div className="mt-4 sm:mt-0 sm:ml-4 lg:ml-0">
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
        {RenderWebsiteBirthday()}
      </div>
    </footer>
  );
}
