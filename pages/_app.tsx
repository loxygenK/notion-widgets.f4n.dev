import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import { Header } from "~/components/molecules/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>notion-widgets.f4n.dev</title>
        <meta name="description" content="Notion widgets hoster" />
        {/* TODO: Replace this path specification to .ico files */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
