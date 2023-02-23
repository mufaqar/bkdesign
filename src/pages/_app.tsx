import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../components/imports";
import { SettingsProvider } from "../context/settingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SettingsProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SettingsProvider>
    </>
  );
}
