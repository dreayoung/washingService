import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sparkle Squad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a demo project! @createdbydwe on instagram."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Ethereal.Blends" />
        <meta
          itemProp="description"
          content="This is a demo project! @createdbydwe on instagram. "
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
