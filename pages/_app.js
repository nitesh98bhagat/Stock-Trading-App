import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
