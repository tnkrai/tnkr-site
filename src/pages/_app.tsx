import "../styles/globals.css";

import { AppProps } from "next/app";

type NextPageWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
};

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
