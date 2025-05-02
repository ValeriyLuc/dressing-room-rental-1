
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { navigationItems } from "./constants";

/**
 * Компонент хедера сайта
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработчик скролла для изменения стиля хедера
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">StudioRent</span>
          </Link>

          {/* Основная навигация - только на десктопе */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-gray-700 hover:text-primary transition-colors rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Контактная информация - только на десктопе */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center text-gray-700 hover:text-primary">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              <span>+7 (495) 123-45-67</span>
            </a>
            <Button>
              Заказать звонок
            </Button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden flex items-center">
            <a href="tel:+74951234567" className="mr-4 text-gray-700">
              <Icon name="Phone" className="h-6 w-6" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col mt-8 space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="px-4 py-2 text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="mt-4">
                    Заказать звонок
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
