import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomizerContextProvider } from "@/context/TestContext";
import { NewProvider } from "../context/NewContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NewProvider>
      <Component {...pageProps} />
    </NewProvider>
  );
}
