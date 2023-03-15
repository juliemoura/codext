import type { AppProps } from 'next/app'
import "../../public/global.css";
import 'antd/dist/reset.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codext</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
