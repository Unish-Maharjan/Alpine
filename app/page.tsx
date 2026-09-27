import BrandSelection from "./components/home/BrandSelection";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import LogoSection from "./components/home/logo";
import PopularWatches from "./components/home/PopularWatches";
import Preloader from "./components/home/Preloader";
import Priorities from "./components/home/Priorities";
import Products from "./components/home/Products";
import SmoothScroll from "./components/home/SmoothScroll";
import WatchAnimation from "./components/home/WatchAnimation";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <main className="relative bg-primary">
        <Header />
        {/* Scoped Hero + About container so Hero is sticky only during About reveal */}
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
