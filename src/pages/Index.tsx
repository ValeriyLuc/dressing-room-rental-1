
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection/CatalogSection";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer/Footer";

/**
 * Главная страница сайта аренды гримерок и мебели для съемок
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <CatalogSection />
      <BenefitsSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
