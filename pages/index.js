import Head from "next/head";
import ContactUs from "../components/ContactUs";
import '../i18n';

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
