import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../gobalStore/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>Stock.ly · By Nitesh Bhagat</title>
      </Head>

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
