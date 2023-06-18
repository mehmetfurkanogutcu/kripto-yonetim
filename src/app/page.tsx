import HeroSection from "@/components/Pages/Home/HeroSection";
import InfoSection from "@/components/Pages/Home/InfoSection";
import JoinSection from "@/components/Pages/Home/JoinSection";
import MobileAppSection from "@/components/Pages/Home/MobileAppSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      {/* <MobileAppSection /> */}
      <JoinSection />
    </div>
  );
}
