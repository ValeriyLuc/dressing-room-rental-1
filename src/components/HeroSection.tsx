
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-purple-900 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056')]
        bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Профессиональные гримерки и мебель для ваших съемок
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Создайте идеальную обстановку для вашего шоу или фильма с нашим премиальным оборудованием
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
