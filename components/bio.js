import Image from "next/image";

function LinkToOutside(link, name) {
  return (
    <a href={link} className="transition duration-150 ease-out underline text-green-300 hover:text-white">
      {name}
    </a>
  );
}

export default function Bio() {
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between w-full lg:w-9/12 pt-12 pb-16 pl-4 pr-4">
      <div className="w-full md:w-1/2 h-fit rounded-xl shadow-xl transition duration-150 ease-out shadow-amber-700/50 hover:shadow-amber-700/100">
        <Image
          src="/media/image/me.webp"
          alt="picture of Milijan Mosić"
          width={128}
          height={128}
          layout="responsive"
          className="w-full md:w-1/2 lg:w-64 h-fit rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-fit mt-8 md:mt-0 md:ml-4 lg:ml-8">
        <p>
          Hello there, web developer here. Minimalist. Linux/BSD advocate. Cat lover. Currently unemployed and the student of
          vocational studies with major in e-business. I "fell in love" with computers 20 years ago and that's why the occuring
          problem is that I want to know everything about them... Right now I'm involved with learning{" "}
          {LinkToOutside("https://tryhackme.com/p/windwalk", "cybersecurity")}, writting Bash scripts for my{" "}
          {LinkToOutside("https://archlinux.org/", "Arch Linux")} rice,{" "}
          {LinkToOutside("https://github.com/windwalk-bushido", "making websites")} (Vue + Flask) and{" "}
          {LinkToOutside("https://projecteuler.net/", "solving math problems")} with Go. Also, I would like to get involved with
          Raspberry Pi and micro-controllers in the future.
        </p>
        <p className="mt-8">
          This blog is going to be about... everything. I would like to make single, online place for myself and to treat it
          kinda like public diary. At the same time, while writting, I should treat it also like whole world is watching...
          weird isn't it? Right now, man is divided between a lot of social media sites and that sucks. This website will serve
          the purpose of keeping all personal (past and future) posts in one place. To get in contact with me use{" "}
          {LinkToOutside("mailto:milijan-mosic@protonmail.com", "milijan-mosic@protonmail.com")} email. Thanks!
        </p>
      </div>
    </div>
  );
}
