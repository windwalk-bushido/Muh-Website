import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <Head page_title="Milijan Mosic's Portfolio" />

      <Nav />
      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <h1>Portfolio</h1>
      </main>
      <Footer />
    </>
  );
}
