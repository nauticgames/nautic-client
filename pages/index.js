import Head from "next/head";
import Games from "../components/Games/Games";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nautic Games</title>
        <meta name="description" content="Join the play to earn revolution" />
        <link rel="icon" href="/fav.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          background-color: #f0f0f0;
        }
      `}</style>

      <Header />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <Games />
        <Team />
        <Mission />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
