import Head from "next/head";

export default function DocumentHead({ page_title }) {
  return (
    <Head>
      <title>{page_title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
