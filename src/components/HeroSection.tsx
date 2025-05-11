import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Главная героическая секция для сайта аренды гримерок и мебели
 */
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504507926119-51c48b77a052?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          opacity: 0.5,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary mb-3">
              Профессиональное оборудование для киноиндустрии
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Аренда гримерок и мебели для съемок
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Создайте идеальные условия для вашей съемочной площадки с нашим
              широким ассортиментом профессионального оборудования
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
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
            <div>
              <p className="text-primary text-3xl font-bold">200+</p>
              <p className="text-gray-300">единиц мебели</p>
            </div>
            <div>
              <p className="text-primary text-3xl font-bold">50+</p>
              <p className="text-gray-300">гримерных комнат</p>
            </div>
            <div>
              <p className="text-primary text-3xl font-bold">100+</p>
              <p className="text-gray-300">успешных проектов</p>
            </div>
            <div>
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
