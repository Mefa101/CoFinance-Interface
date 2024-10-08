import AppsProject from "@/components/AppsProject";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PromotionBanner from "@/components/Promotions";
import SuportedNetwork from "@/components/SuportedNetwork";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PromotionBanner />
      <AppsProject />
      <WhyChooseUs />
      <SuportedNetwork />
      <Footer />
    </main>
  );
}