import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomizerContextProvider } from "@/context/TestContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomizerContextProvider>
      <Component {...pageProps} />
    </CustomizerContextProvider>
  );
}
