import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <>
      <Head page_title="Milijan Mosic's Blog" />

      <Nav />
      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <h1 className="">Posts here</h1>
      </main>
      <Footer />
    </>
  );
}
