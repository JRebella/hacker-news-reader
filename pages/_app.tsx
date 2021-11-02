import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Layout title="Hacker News Reader By Juan Rebella">
        <link rel="stylesheet" href="https://use.typekit.net/sgw3rmg.css"></link>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
