export default function Bio() {
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between w-full lg:w-8/12 pt-12 pb-16 pl-4 pr-4">
      <img src="/me.jpg" alt="picture of Milijan Mosić" className="w-full md:w-1/2 lg:w-64 h-fit rounded-xl shadow-xl" />
      <div className="w-full md:w-1/2 lg:w-fit mt-8 md:mt-0 md:ml-4 lg:ml-8">
        <p>
          Hello there, web developer here. Minimalist. Linux/BSD advocate. Cat lover. Currently unemployed and the student of
          vocational studies with major in e-business. I "fell in love" with computers 20 years ago and that's why the occuring
          problem is that I want to know everything about them... Right now I'm involved with learning{" "}
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
          with Go. Also, I would like to get involved with Raspberry Pi and micro-controllers in the future.
        </p>
        <p className="mt-8">
          This blog is going to be about... everything. I would like to make single, online place for myself and to treat it
          kinda like public diary. At the same time, while writting, I should treat it also like whole world is watching...
          weird isn't it? Right now, man is divided between a lot of social media sites and that sucks. This website will serve
          the purpose of keeping all personal (past and future) posts in one place. To get in contact with me use{" "}
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
  );
}
