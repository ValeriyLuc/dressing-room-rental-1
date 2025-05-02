
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import CTASection from "@/components/CTASection";
import Icon from "@/components/ui/icon";

// Категории проектов
const projectCategories = [
  { id: "all", name: "Все проекты" },
  { id: "films", name: "Фильмы" },
  { id: "series", name: "Сериалы" },
  { id: "shows", name: "ТВ-шоу" },
  { id: "commercials", name: "Рекламные ролики" },
  { id: "music", name: "Музыкальные клипы" }
];

// Проекты
const projects = [
  {
    id: "project1",
    title: "Тайна древнего города",
    category: "films",
    year: "2023",
    client: "Мосфильм",
    description: "Исторический фильм о поисках артефактов в древнем городе. Наша компания обеспечила гримерные комнаты и аутентичную мебель для исторических сцен.",
    image: "https://images.unsplash.com/photo-1578674473215-9e297dae8c6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523781366603-73ee95b9d8e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534649643822-e7431de08af6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512025316832-8658f04f8a83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project2",
    title: "Новая жизнь",
    category: "series",
    year: "2022",
    client: "Централ Партнершип",
    description: "Драматический сериал о судьбах людей в современном мегаполисе. Мы предоставили мобильные гримерки и современную мебель для различных локаций.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617225169880-c7b016ad1d82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572869395636-89406900064b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606143576311-65d3c0d9c279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project3",
    title: "Утреннее шоу 'Бодрость'",
    category: "shows",
    year: "2023",
    client: "Первый канал",
    description: "Популярное утреннее шоу с ведущими звездами. Наша компания обеспечивает гримерные комнаты для ведущих и гостей на постоянной основе.",
    image: "https://images.unsplash.com/photo-1551185618-5d9d2d4d6ee3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539723986919-d09373d81b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project4",
    title: "Сезоны любви",
    category: "series",
    year: "2021",
    client: "Netflix Россия",
    description: "Романтический сериал о сложностях отношений в разные времена года. Мы предоставили полный комплект оборудования для съемочных площадок.",
    image: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841789643-2685642fcb43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project5",
    title: "Авто Премиум",
    category: "commercials",
    year: "2023",
    client: "Автоконцерн Премиум",
    description: "Серия премиальных рекламных роликов для нового автомобиля. Мы обеспечили освещение и мебель для создания роскошных интерьеров.",
    image: "https://images.unsplash.com/photo-1550846088-10294f0656f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1619120238346-978e07731e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "project6",
    title: "Мечта",
    category: "music",
    year: "2022",
    client: "Группа 'Стихия'",
    description: "Клип популярной музыкальной группы. Мы предоставили декорации и мебель в стиле футуризма для создания уникальной атмосферы.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522536421511-14c9073df899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570420118092-5b96e28ff4cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

/**
 * Страница с проектами компании
 */
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // Фильтрация проектов по категории
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  // Получаем выбранный проект
  const projectDetails = selectedProject 
    ? projects.find(project => project.id === selectedProject) 
    : null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">Главная</a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>Проекты</span>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Портфолио</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Проекты, которыми мы гордимся</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              За годы работы мы участвовали в сотнях успешных проектов различного масштаба. 
              Вот некоторые из них, где наша команда обеспечивала техническую часть съемочного процесса.
            </p>
          </div>
          
          {/* Вкладки категорий */}
          <Tabs 
            defaultValue="all" 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="mb-10"
          >
            <TabsList className="w-full md:w-auto flex flex-wrap justify-center">
              {projectCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Список проектов */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <Card 
                  key={project.id} 
                  className="border-0 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge>{project.year}</Badge>
                    </div>
                    <p className="text-gray-500 mb-3">Клиент: {project.client}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <Button variant="ghost" size="sm" className="mt-2">
                      Подробнее <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <Icon name="SearchX" className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Проекты не найдены</h3>
              <p className="text-gray-600 mb-6">В данной категории пока нет проектов.</p>
              <Button onClick={() => setSelectedCategory("all")}>
                Показать все проекты
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Модальное окно с деталями проекта */}
      {selectedProject && projectDetails && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Badge className="mb-2">{
                    projectCategories.find(c => c.id === projectDetails.category)?.name || projectDetails.category
                  }</Badge>
                  <h2 className="text-2xl font-bold">{projectDetails.title}</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                >
                  <Icon name="X" className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={projectDetails.image} 
                  alt={projectDetails.title} 
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                
                <div className="grid grid-cols-3 gap-2">
                  {projectDetails.gallery.map((img, index) => (
                    <img 
                      key={index} 
                      src={img} 
                      alt={`Галерея ${index + 1}`} 
                      className="h-24 w-full object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Год</h4>
                  <p>{projectDetails.year}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Клиент</h4>
                  <p>{projectDetails.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Категория</h4>
                  <p>{projectCategories.find(c => c.id === projectDetails.category)?.name}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Описание проекта</h4>
                <p className="text-gray-600">{projectDetails.description}</p>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={() => setSelectedProject(null)}>
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Статистика */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">250+</p>
              <p className="text-gray-600">Съемочных дней</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">120+</p>
              <p className="text-gray-600">Фильмов и сериалов</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-600">Телешоу</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary mb-2">300+</p>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Процесс работы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Как мы работаем</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс сотрудничества</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы стремимся сделать процесс работы максимально комфортным и эффективным для наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">1</span>
                <div className="absolute -right-8 top-1/2 h-0.5 w-16 bg-gray-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Заявка</h3>
              <p className="text-gray-600">Вы оставляете заявку на сайте или звоните нам по телефону</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">2</span>
                <div className="absolute -right-8 top-1/2 h-0.5 w-16 bg-gray-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">Наш менеджер связывается с вами для уточнения деталей и требований</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">3</span>
                <div className="absolute -right-8 top-1/2 h-0.5 w-16 bg-gray-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Подготовка</h3>
              <p className="text-gray-600">Мы готовим все необходимое оборудование и мебель под ваши задачи</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Реализация</h3>
              <p className="text-gray-600">Доставляем, монтируем и обеспечиваем техническую поддержку</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Projects;
