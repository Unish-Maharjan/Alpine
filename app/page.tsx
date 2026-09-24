import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import LogoSection from "./components/home/logo";
import Priorities from "./components/home/Priorities";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <LogoSection />
        <Products />
        <Priorities/>
        <Footer />
      </main>
    </>
  );
}


