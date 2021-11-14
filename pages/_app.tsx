import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout/Layout";

import { StyledEngineProvider } from "@mui/material/styles";

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

        <StyledEngineProvider injectFirst>
          <Layout title="Hacker News Reader By Juan Rebella">
            <link rel="stylesheet" href="https://use.typekit.net/sgw3rmg.css"></link>
            <Component {...pageProps} />
          </Layout>
        </StyledEngineProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
