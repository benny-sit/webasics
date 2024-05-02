import AskAi from "@/components/home/AskAi/AskAi";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import InfoCard from "@/components/home/InfoCard";
import MoreDetails from "@/components/home/MoreDetails";
import Promo from "@/components/home/Promo";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen flex-col items-center max-w-screen-2xl px-4">
      <Header />
      <Hero />
      <Promo />
      <Info />
      <AskAi />
      <MoreDetails />
      <Footer />
    </main>
  );
}
