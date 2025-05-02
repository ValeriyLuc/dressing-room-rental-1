
export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type ContactInfo = {
  icon: string;
  text: string;
};

export type SocialLink = {
  icon: string;
  href: string;
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Каталог",
    links: [
      { label: "Гримерки", href: "/" },
      { label: "Мебель", href: "/" },
      { label: "Освещение", href: "/" },
      { label: "Аксессуары", href: "/" }
    ]
  },
  {
    title: "О компании",
    links: [
      { label: "О нас", href: "/" },
      { label: "Клиенты", href: "/" },
      { label: "Отзывы", href: "/" },
      { label: "Контакты", href: "/" }
    ]
  }
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "Phone", text: "+7 (495) 123-45-67" },
  { icon: "Mail", text: "info@premiumstudio.ru" },
  { icon: "MapPin", text: "Москва, ул. Киностудийная, 42" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "Instagram", href: "/" },
  { icon: "Facebook", href: "/" },
  { icon: "Youtube", href: "/" },
  { icon: "Twitter", href: "/" }
];
