import BrandSelection from "./components/home/BrandSelection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import LogoSection from "./components/home/About";
import PopularWatches from "./components/home/PopularWatches";
import Preloader from "./components/Preloader";
import Priorities from "./components/home/Priorities";
import Products from "./components/home/Products";
import SmoothScroll from "./components/SmoothScroll";
import WatchAnimation from "./components/home/WatchAnimation";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <main className="relative bg-primary">
        <Header />
        <div className="relative">
          <Hero />
          <LogoSection />
        </div>
        <BrandSelection />
        <PopularWatches />
        <div className="w-full bg-[#0c3b3c] px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto border-t border-[#eadab2]/20" />
        </div>
        <Products />     
        <WatchAnimation />
        <Priorities />
        <Footer />
      </main>
    </>
  );
}
