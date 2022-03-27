import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Donate() {
  return (
    <>
      <Head page_title="Donate to Milijan Mosic" />

      <Nav />
      <main className="flex justify-center items-center w-full bg-gray-900 text-white">
        <h1>Donate</h1>
      </main>
      <Footer />
    </>
  );
}
