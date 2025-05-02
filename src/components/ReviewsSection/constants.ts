
export interface Review {
  id: string;
  author: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  project?: string;
}

export const reviews: Review[] = [
  {
    id: "review1",
    author: "Анна Соколова",
    position: "Продюсер",
    company: "Cinema Vision",
    content: "Работаем с этой компанией уже третий проект подряд. Всегда идеально чистые гримерки, своевременная доставка и монтаж. Актеры в восторге от комфортных условий. Рекомендую!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Сериал «Новый день»"
  },
  {
    id: "review2",
    author: "Михаил Громов",
    position: "Режиссер",
    company: "MovieLab Productions",
    content: "Спасибо за оперативность! Понадобилась срочная замена мебели для важной сцены, и команда доставила все в течение нескольких часов, спасли наш съемочный день.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Фильм «Последний шанс»"
  },
  {
    id: "review3",
    author: "Елена Верник",
    position: "Художник-постановщик",
    company: "АртСтудио",
    content: "Великолепное качество мебели для исторических сцен. Ретро диваны выглядят настолько аутентично, что даже наш консультант по истории был впечатлен. Будем сотрудничать еще!",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Исторический сериал «Эпоха перемен»"
  },
  {
    id: "review4",
    author: "Александр Петров",
    position: "Директор съемочной группы",
    company: "Мосфильм",
    content: "Уже несколько лет арендуем у вас оборудование для всех наших проектов. Надежность и профессионализм на высоте. Отдельное спасибо вашим техническим специалистам!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Различные проекты"
  }
];
