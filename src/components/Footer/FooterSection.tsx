
import { Link } from "react-router-dom";
import type { FooterSection as FooterSectionType } from "./constants";

type FooterSectionProps = {
  section: FooterSectionType;
};

const FooterSection = ({ section }: FooterSectionProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">{section.title}</h4>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className="text-gray-400 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
