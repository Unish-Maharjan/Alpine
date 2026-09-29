import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/timepieces/Footer";
import Hero from "../components/timepieces/Hero";
import TimepiecesAbout from "../components/timepieces/About";
import SmoothScroll from "../components/SmoothScroll";
import Titlesection from "../components/timepieces/Titlesection";
import WatchAnimation from "../components/timepieces/WatchAnimation";

export const metadata: Metadata = {
  title: "Timepieces | Alpine Timepieces",
  description:
    "Discover our exceptional collection of handcrafted luxury Swiss timepieces.",
};

export default function TimepiecesPage() {
  return (
    <>
      <SmoothScroll />
      <main className="relative min-h-screen bg-[#06334a] text-[#f8f6f0]">
        <Header variant="dark" />
        <Hero />
        <TimepiecesAbout />
        <WatchAnimation/>
        <Titlesection />
        <Footer variant="dark" />
      </main>
    </>
  );
}