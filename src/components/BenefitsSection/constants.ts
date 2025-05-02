
export type Benefit = {
  title: string;
  description: string;
  iconName: string;
  fallbackIcon?: string;
};

export const BENEFITS: Benefit[] = [
  {
    title: "Премиальное качество",
    description: "Все наше оборудование соответствует высоким стандартам качества для профессиональных съемок",
    iconName: "Star"
  },
  {
    title: "Быстрая доставка",
    description: "Доставляем оборудование на вашу площадку в течение 24 часов после подтверждения заказа",
    iconName: "Truck"
  },
  {
    title: "Техническая поддержка",
    description: "Наши специалисты готовы помочь с установкой и настройкой оборудования в любое время",
    iconName: "HeadSet",
    fallbackIcon: "Headphones"
  }
];
