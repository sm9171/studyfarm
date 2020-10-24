// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>스터디팜</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
