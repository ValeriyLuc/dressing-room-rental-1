
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { 
  FOOTER_SECTIONS, 
  CONTACT_INFO,
  SOCIAL_LINKS 
} from "./constants";
import FooterSection from "./FooterSection";
import ContactSection from "./ContactSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PremiumStudio</h3>
            <p className="text-gray-400">Профессиональное оборудование для съемок шоу и фильмов</p>
          </div>
          
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
          
          <ContactSection contacts={CONTACT_INFO} />
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} PremiumStudio. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {SOCIAL_LINKS.map((social, index) => (
              <Link key={index} to={social.href} className="text-gray-400 hover:text-white">
                <Icon name={social.icon} size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
