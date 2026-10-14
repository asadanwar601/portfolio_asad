import type { AppProps } from "next/app";
import "@/css/shared.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import WhatsAppButton from "@/layout/WhatsAppButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
