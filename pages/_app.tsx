import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <QueryClientProvider client={queryClient}>
        {/* The rest of your application */}

        <ReactQueryDevtools initialIsOpen={false} />
        <Layout title="Hacker News Reader By Juan Rebella">
          <link rel="stylesheet" href="https://use.typekit.net/sgw3rmg.css"></link>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
