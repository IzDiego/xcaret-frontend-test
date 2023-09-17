import { type AppProps } from "next/app";
import Head from "next/head";
import Providers from "~/redux/providers";
import "~/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EXPERIENCIAS XCARET</title>
        <meta name="description" content="EXPERIENCIAS XCARET TEST DIEGO" />
        <link rel="icon" href="https://www.grupoxcaret.com/es/wp-content/uploads/2019/03/favicon-1.png" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
