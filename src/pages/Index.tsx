
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

/**
 * Главная страница сайта аренды гримерок и мебели для съемок
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Секция "Почему мы" */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Наши преимущества</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий спектр услуг по аренде оборудования и мебели для создания 
              идеальных условий на съемочной площадке
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="Star" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Профессиональное оборудование</h3>
              <p className="text-gray-600">
                Только современное оборудование и стильная мебель, которые подойдут для съемок 
                любого масштаба и бюджета
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка и монтаж</h3>
              <p className="text-gray-600">
                Оперативно доставим и установим все необходимое оборудование на вашей 
                съемочной площадке
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="HeadsetHelp" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Техническая поддержка и консультации на всех этапах съемочного процесса 
                в любое время суток
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция "Что мы предлагаем" */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2">Каталог</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий выбор оборудования и мебели для профессиональных съемок
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/ef154eac-115f-4356-9945-6f0847be6e7b.jpg" 
                  alt="Гримерные комнаты" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Гримерные комнаты</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Просторные и комфортные гримерные комнаты с профессиональным освещением
                </p>
                <Button variant="ghost" size="sm" className="font-medium flex items-center">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/80cf2240-6d6f-46d2-b46f-02911b16d5ad.jpg" 
                  alt="Мебель для съемок" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Мебель для съемок</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Стильная и функциональная мебель для оформления съемочных площадок
                </p>
                <Button variant="ghost" size="sm" className="font-medium flex items-center">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Освещение" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Освещение</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Профессиональное световое оборудование для создания идеальной картинки
                </p>
                <Button variant="ghost" size="sm" className="font-medium flex items-center">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Аксессуары" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Аксессуары</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Дополнительные элементы для обеспечения комфортной работы съемочной группы
                </p>
                <Button variant="ghost" size="sm" className="font-medium flex items-center">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg">
              Смотреть весь каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA секция */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы обеспечить ваш проект всем необходимым?
            </h2>
            <p className="text-xl mb-8">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут, чтобы ответить 
              на ваши вопросы и подобрать оптимальное решение
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              Оставить заявку
              <Icon name="SendHorizontal" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
