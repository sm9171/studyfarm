// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>스터디팜</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
