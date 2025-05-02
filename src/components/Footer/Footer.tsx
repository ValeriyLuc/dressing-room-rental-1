
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import FooterSection from "./FooterSection";
import ContactSection from "./ContactSection";
import { footerSections, socialLinks } from "./constants";

/**
 * Футер сайта аренды гримерок и мебели для съемок
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <div>
            <div className="mb-4">
              <img 
                src="/public/logo-b.svg" 
                alt="StudioRent Logo" 
                className="h-10"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Профессиональная аренда гримерок и мебели для съемок шоу, фильмов и фотосессий.
              Поможем создать идеальные условия для работы вашей съемочной группы.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Разделы футера */}
          {footerSections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
          
          {/* Контактная информация */}
          <div className="lg:col-span-1">
            <ContactSection />
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} StudioRent. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-primary">Политика конфиденциальности</a>
            <a href="/terms" className="hover:text-primary">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
