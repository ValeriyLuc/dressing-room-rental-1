
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  image: string;
  gallery: string[];
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "Все проекты" },
  { id: "shows", name: "ТВ-шоу" },
  { id: "films", name: "Фильмы" },
  { id: "series", name: "Сериалы" },
];

export const projects: Project[] = [
  {
    id: "project1",
    title: "Шоу Маска",
    category: "shows",
    year: "2022-2025",
    client: "канал НТВ",
    description:
      "Популярное музыкальное телешоу, где знаменитости выступают в невероятных костюмах. Наша компания обеспечила гримерные комнаты и зоны отдыха для участников шоу.",
    image:
      "https://cdn.poehali.dev/files/6ca77d57-20e0-4218-b704-08652f3b4326.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1523781366603-73ee95b9d8e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534649643822-e7431de08af6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512025316832-8658f04f8a83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project2",
    title: "Шоу Гладиаторы",
    category: "shows",
    year: "2025",
    client: "Телеканал НТВ",
    description:
      "Масштабное спортивное шоу, в котором участники проходят сложные испытания на арене. Наша компания обеспечила гримерные комнаты и тренировочные зоны для участников проекта.",
    image:
      "https://cdn.poehali.dev/files/bb7e8534-347c-42cc-be12-4c5f6c35d7dd.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1617225169880-c7b016ad1d82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572869395636-89406900064b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606143576311-65d3c0d9c279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project3",
    title: "Ну-ка, все вместе!",
    category: "shows",
    year: "2024",
    client: "телеканал НТВ",
    description:
      "Масштабное музыкальное шоу, где участники выступают перед сотней судей. Наша компания обеспечила гримерные комнаты и зоны подготовки для конкурсантов и судей.",
    image:
      "https://cdn.poehali.dev/files/5c3a0fdf-f45e-4c15-935c-37fbca283d98.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539723986919-d09373d81b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project4",
    title: "Шоу Ярче звёзд",
    category: "shows",
    year: "2025",
    client: "телеканал ТНТ",
    description:
      "Масштабное талант-шоу с участием знаменитостей. Наша компания обеспечила профессиональные гримерные комнаты и декорации для создания идеальной атмосферы на съемочной площадке.",
    image:
      "https://cdn.poehali.dev/files/6ccb82b8-5f89-4a1e-986e-c8aaecb406ae.jfif",
    gallery: [
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841789643-2685642fcb43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project5",
    title: "Шоу Большой Хит",
    category: "shows",
    year: "2025",
    client: "телеканал ТНТ",
    description:
      "Музыкальное шоу, где участники соревнуются в создании хитовых песен. Наша компания обеспечила комплексное техническое оснащение сцены, включая судейские столы и гримерные комнаты.",
    image:
      "https://cdn.poehali.dev/files/6e0caf19-1139-4567-bf4e-5ffdb9e2b4ce.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1619120238346-978e07731e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project6",
    title: "Шоу Пятеро на одного",
    category: "shows",
    year: "2025",
    client: "телеканал Россия-1",
    description:
      "Интеллектуальное телешоу, в котором команда из пяти эрудитов противостоит одному игроку. Наша компания предоставила комплексное оборудование гримерных зон и подготовила техническое оснащение студии.",
    image:
      "https://cdn.poehali.dev/files/dc40369e-e5f2-40e4-85b6-b1d9f9c71eba.jfif",
    gallery: [
      "https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570420118092-5b96e28ff4cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "project7",
    title: "Шоу Аватар",
    category: "shows",
    year: "2025",
    client: "телеканал НТВ",
    description:
      "Инновационное развлекательное шоу с использованием новейших технологий захвата движения и компьютерной графики. Наша компания обеспечила комплексное оборудование для гримерных комнат и помощь в создании технической инфраструктуры проекта.",
    image:
      "https://cdn.poehali.dev/files/de671994-0b26-45f3-a05d-dcc8c8927379.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export const statistics = [
  { label: "Съемочных дней", value: "250+" },
  { label: "Фильмов и сериалов", value: "120+" },
  { label: "Телешоу", value: "50+" },
  { label: "Довольных клиентов", value: "300+" },
];

export const workProcessSteps = [
  {
    step: 1,
    title: "Заявка",
    description: "Вы оставляете заявку на сайте или звоните нам по телефону",
  },
  {
    step: 2,
    title: "Консультация",
    description: "Наш менеджер связывается с вами для уточнения деталей и требований",
  },
  {
    step: 3,
    title: "Подготовка",
    description: "Мы готовим все необходимое оборудование и мебель под ваши задачи",
  },
  {
    step: 4,
    title: "Реализация",
    description: "Доставляем, монтируем и обеспечиваем техническую поддержку",
  },
];
