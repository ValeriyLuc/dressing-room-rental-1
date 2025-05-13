export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "makeup-rooms",
    name: "Гримерные комнаты",
    description:
      "Просторные и функциональные гримерки различных размеров с профессиональным освещением",
    image:
      "https://cdn.poehali.dev/files/680288b0-40d6-4561-adc3-9483d207d723.jpg",
  },
  {
    id: "makeup-tables",
    name: "Гримёрные столы",
    description:
      "Профессиональные гримёрные столы с качественным освещением для идеального макияжа",
    image:
      "https://images.unsplash.com/photo-1582544888600-c5f5450d5b6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "furniture",
    name: "Мебель для съемок",
    description:
      "Стильная и функциональная мебель для оформления съемочных площадок и декораций",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lighting",
    name: "Освещение",
    description:
      "Профессиональное осветительное оборудование для создания нужной атмосферы",
    image:
      "https://images.unsplash.com/photo-1565896311009-382b9e813b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "accessories",
    name: "Аксессуары",
    description:
      "Дополнительные элементы для комфортной работы съемочной группы",
    image:
      "https://cdn.poehali.dev/files/78a7165e-39b4-4118-890c-ea8ee21f6226.jpg",
  },
];

export const products: Product[] = [
  // Гримерные комнаты
  {
    id: "makeup-room-standard",
    name: "Стандартная гримерка",
    description:
      "Функциональная гримерная комната с комфортным освещением и местом для 2-3 человек",
    price: 15000,
    image:
      "https://cdn.poehali.dev/files/3f5cc244-bf81-4bfa-bcda-f7cb247acf86.jpg",
    category: "makeup-rooms",
    tags: ["стандарт", "компактная"],
  },
  {
    id: "makeup-room-premium",
    name: "Звукоизоляционная комната",
    description:
      "Специально разработанное пространство с максимальной звуковой изоляцией для комфортной подготовки участников телевизионных шоу",
    price: 25000,
    image:
      "https://cdn.poehali.dev/files/625cc90b-5f85-4bfa-9993-c31434abd0d4.jpg",
    category: "makeup-rooms",
    tags: ["звукоизоляция", "премиум"],
  },
  {
    id: "makeup-room-mobile",
    name: "Мобильная гримерка",
    description:
      "Компактная передвижная гримерная, идеальная для локаций вне студии",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1568385247005-0d371d214a2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-rooms",
    tags: ["мобильная", "компактная"],
  },

  // Гримёрные столы
  {
    id: "makeup-table-standard",
    name: "Стандартный гримерный стол",
    description:
      "Удобный гримерный стол с зеркалом и встроенной подсветкой для профессионального макияжа",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1582544888600-c5f5450d5b6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-tables",
    tags: ["стандарт", "подсветка"],
  },
  {
    id: "makeup-table-premium",
    name: "Премиум гримерный стол",
    description:
      "Гримерный стол с большим зеркалом, регулируемой LED-подсветкой и ящиками для хранения",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1600255821009-45c01293f4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-tables",
    tags: ["премиум", "LED-подсветка"],
  },
  {
    id: "makeup-table-portable",
    name: "Портативный гримерный стол",
    description:
      "Компактный складной гримерный стол с зеркалом и подсветкой, идеален для выездных работ",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "makeup-tables",
    tags: ["портативный", "складной"],
  },

  // Мебель для съемок
  {
    id: "sofa-retro",
    name: "Ретро диван",
    description:
      "Винтажный диван в стиле 70-х годов, идеален для исторических съемок",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    tags: ["диван", "ретро", "винтаж"],
  },
  {
    id: "chair-director",
    name: "Режиссерское кресло",
    description:
      "Классическое режиссерское кресло с вышитым именем, символ творчества и вдохновения. Высокие подлокотники и спинка обеспечивают поддержку во время долгих часов работы.",
    price: 3500,
    image:
      "https://cdn.poehali.dev/files/ca43fcde-3d4a-432e-bd4e-bcce22136f9f.jpg",
    category: "furniture",
    tags: ["кресло", "режиссерское"],
  },
  {
    id: "table-makeup",
    name: "Гримерный стол",
    description: "Профессиональный стол для гримера с ящиками и подсветкой",
    price: 7000,
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    tags: ["стол", "гримерный"],
  },
];
