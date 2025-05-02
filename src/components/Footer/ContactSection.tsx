
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Секция контактов для футера
 */
const ContactSection = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <Icon name="MapPin" className="h-5 w-5 text-gray-500 mr-3" />
          <p className="text-gray-700">г. Москва, ул. Киностудийная, 42</p>
        </div>
        <div className="flex items-center">
          <Icon name="Phone" className="h-5 w-5 text-gray-500 mr-3" />
          <a href="tel:+74951234567" className="text-gray-700 hover:text-primary">+7 (495) 123-45-67</a>
        </div>
        <div className="flex items-center">
          <Icon name="Mail" className="h-5 w-5 text-gray-500 mr-3" />
          <a href="mailto:info@studiorent.ru" className="text-gray-700 hover:text-primary">info@studiorent.ru</a>
        </div>
        <div className="flex items-center">
          <Icon name="Clock" className="h-5 w-5 text-gray-500 mr-3" />
          <p className="text-gray-700">Пн-Вс: 9:00 - 21:00</p>
        </div>
      </div>
      
      <Button variant="outline" className="w-full">
        Схема проезда <Icon name="MapPin" className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ContactSection;
