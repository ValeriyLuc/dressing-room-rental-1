
export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Главная",
    href: "/"
  },
  {
    label: "Каталог",
    href: "/catalog"
  },
  {
    label: "Услуги",
    href: "/services"
  },
  {
    label: "О нас",
    href: "/about"
  },
  {
    label: "Проекты",
    href: "/projects"
  },
  {
    label: "Контакты",
    href: "/contacts"
  }
];
