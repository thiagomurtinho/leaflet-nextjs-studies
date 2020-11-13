import type { AppProps } from 'next/app';
import GlobalStyle from './global';
import './styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
