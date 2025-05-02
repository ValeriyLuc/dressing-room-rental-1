
import { FooterSection as FooterSectionType } from "./constants";

interface FooterSectionProps {
  section: FooterSectionType;
}

/**
 * Секция ссылок для футера
 */
const FooterSection = ({ section }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              className="text-gray-600 hover:text-primary transition-colors"
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
