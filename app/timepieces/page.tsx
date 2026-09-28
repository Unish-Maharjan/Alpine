import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/timepieces/Footer";
import Hero from "../components/timepieces/Hero";
import TimepiecesAbout from "../components/timepieces/About";
import SmoothScroll from "../components/SmoothScroll";
import Titlesection from "../components/timepieces/Titlesection";

export const metadata: Metadata = {
  title: "Timepieces | Alpine Timepieces",
  description: "Discover our exceptional collection of handcrafted luxury Swiss timepieces.",
};

export default function TimepiecesPage() {
  return (
    <>
      <SmoothScroll />
      <main className="relative bg-[#06334a] min-h-screen text-[#f8f6f0]">
        <Header variant="dark" />
        <Hero />
        <TimepiecesAbout />
        <Titlesection />
        <Footer variant="dark" />
      </main>
    </>
  );
}
