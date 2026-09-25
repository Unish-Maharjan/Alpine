import BrandSelection from "./components/home/BrandSelection";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import LogoSection from "./components/home/logo";
import PopularWatches from "./components/home/PopularWatches";
import Priorities from "./components/home/Priorities";
import Products from "./components/home/Products";
import WatchAnimation from "./components/home/WatchAnimation";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <LogoSection/>
        <BrandSelection />
        <PopularWatches />
        <Products />     
        <WatchAnimation />
        <Priorities />
        <Footer />
      </main>
    </>
  );
}
