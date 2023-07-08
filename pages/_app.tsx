import { store } from "@/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import footerStyles from "@/styles/Footer.module.scss";

const fontClass = Roboto({
  subsets: [],
  weight: "500",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <div className={`${fontClass.className}`}>
          <Component {...pageProps}></Component>

          <footer className={footerStyles.footer_container}>
            <p>© 2023 discover coffee shops</p>
          </footer>
        </div>
      </Provider>
    </>
  );
}
