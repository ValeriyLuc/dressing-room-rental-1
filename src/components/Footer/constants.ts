
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export const footerSections: FooterSection[] = [
  {
    title: "Каталог",
    links: [
      { label: "Гримерные комнаты", url: "/catalog/makeup-rooms" },
      { label: "Мебель для съемок", url: "/catalog/furniture" },
      { label: "Освещение", url: "/catalog/lighting" },
      { label: "Аксессуары", url: "/catalog/accessories" }
    ]
  },
  {
    title: "Информация",
    links: [
      { label: "О компании", url: "/about" },
      { label: "Наши проекты", url: "/projects" },
      { label: "Блог", url: "/blog" },
      { label: "Отзывы", url: "/reviews" }
    ]
  },
  {
    title: "Клиентам",
    links: [
      { label: "Условия аренды", url: "/terms" },
      { label: "Доставка и монтаж", url: "/delivery" },
      { label: "Часто задаваемые вопросы", url: "/faq" },
      { label: "Контакты", url: "/contacts" }
    ]
  }
];

export const socialLinks = [
  { label: "Telegram", url: "https://t.me/studiorent", icon: "Send" },
  { label: "VK", url: "https://vk.com/studiorent", icon: "MessageCircle" },
  { label: "Instagram", url: "https://instagram.com/studiorent", icon: "Instagram" },
  { label: "YouTube", url: "https://youtube.com/studiorent", icon: "Youtube" }
];
