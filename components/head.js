import Head from "next/head";

export default function DocumentHead({ page_title }) {
  return (
    <Head>
      <title>{page_title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Parisienne&display=swap" rel="stylesheet" />
    </Head>
  );
}
