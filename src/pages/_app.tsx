import type { AppProps } from 'next/app'
import "../../public/global.css";
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
