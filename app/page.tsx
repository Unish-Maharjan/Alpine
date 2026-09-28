import BrandSelection from "./components/home/BrandSelection";
import Footer from "./components/home/Footer";
import Header from "./components/Header";
import Hero from "./components/home/Hero";
import LogoSection from "./components/home/About";
import PopularWatches from "./components/home/PopularWatches";
import Preloader from "./components/Preloader";
import Priorities from "./components/home/Priorities";
import Products from "./components/home/Products";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll/>
      <main className="relative bg-primary">
        <Header/>
        <div className="relative">
          <Hero/>
          <LogoSection/>
        </div>
        <BrandSelection/>
        <PopularWatches/>
        <Products/>  
        <Priorities/>
        <Footer/>
      </main>
    </>
  );
}
