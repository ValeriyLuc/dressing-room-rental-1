
import Icon from "@/components/ui/icon";
import type { ContactInfo } from "./constants";

type ContactSectionProps = {
  contacts: ContactInfo[];
};

const ContactSection = ({ contacts }: ContactSectionProps) => {
  return (
    <div>
      <h4 className="font-semibold mb-4">Связаться с нами</h4>
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center mb-3">
          <Icon name={contact.icon} className="mr-2 text-gray-400" size={16} />
          <span className="text-gray-400">{contact.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;
