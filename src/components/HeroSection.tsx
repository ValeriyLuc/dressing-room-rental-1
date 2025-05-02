
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Главная секция сайта аренды гримерок и мебели для съемок
 */
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center 30%",
          opacity: 0.8 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      {/* Контент */}
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Профессиональные гримерки и мебель для съемок
          </h1>
          <p className="text-xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Создайте идеальные условия для вашей съемочной площадки с нашим широким ассортиментом мебели, 
            гримерных комнат и аксессуаров для киноиндустрии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Заказать консультацию
              <Icon name="Phone" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Статистика */}
      <div className="bg-black/80 py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="text-primary text-3xl font-bold">200+</p>
              <p className="text-gray-300">единиц мебели</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <p className="text-primary text-3xl font-bold">50+</p>
              <p className="text-gray-300">типов гримерок</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p className="text-primary text-3xl font-bold">300+</p>
              <p className="text-gray-300">успешных проектов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
              <p className="text-primary text-3xl font-bold">24/7</p>
              <p className="text-gray-300">поддержка клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
