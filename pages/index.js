import Head from "next/head";
import Component from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Renderlesskit React Tailwind Example</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex items-center justify-center min-h-screen'>
        <Component />
      </main>
    </div>
  );
}
