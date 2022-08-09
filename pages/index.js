import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>TheReplay78</title>
        <meta
          name="description"
          content="TheReplay78 - Entrons en contact."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ContactUs />
      </main>
    </div>
  );
}
