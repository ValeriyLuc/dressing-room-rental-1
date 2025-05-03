
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

/**
 * Компонент футера сайта
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-primary">StudioRent</span>
            </div>
            <p className="text-gray-600 mb-4">
              Профессиональная аренда гримерок и мебели для съемок шоу, фильмов и фотосессий.
              Мы помогаем создать идеальные условия для работы вашей съемочной группы.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="VK"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><a href="/catalog" className="text-gray-600 hover:text-primary">Гримерные комнаты</a></li>
              <li><a href="/catalog" className="text-gray-600 hover:text-primary">Мебель для съемок</a></li>
              <li><a href="/catalog" className="text-gray-600 hover:text-primary">Освещение</a></li>
              <li><a href="/catalog" className="text-gray-600 hover:text-primary">Аксессуары</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-primary">О компании</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-primary">Услуги</a></li>
              <li><a href="/projects" className="text-gray-600 hover:text-primary">Проекты</a></li>
              <li><a href="/contacts" className="text-gray-600 hover:text-primary">Контакты</a></li>
            </ul>
          </div>
          
          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">г. Москва, ул. Киностудийная, 42</span>
              </div>
              <div className="flex items-start">
                <Icon name="Phone" className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-start">
                <Icon name="Mail" className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">info@studiorent.ru</span>
              </div>
              <div className="flex items-start">
                <Icon name="Clock" className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                <span className="text-gray-600">Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
            
            <Button variant="outline" className="mt-4 w-full">
              Связаться с нами
            </Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} StudioRent. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
