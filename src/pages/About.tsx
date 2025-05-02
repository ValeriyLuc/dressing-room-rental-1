
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";
import Icon from "@/components/ui/icon";

const teamMembers = [
  {
    name: "Алексей Иванов",
    position: "Генеральный директор",
    bio: "15+ лет опыта в киноиндустрии. Ранее работал исполнительным продюсером в крупных кинопроектах.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Елена Петрова",
    position: "Коммерческий директор",
    bio: "10+ лет в организации съемочного процесса и обеспечении технических нужд киностудий.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Дмитрий Сидоров",
    position: "Технический директор",
    bio: "Инженер с опытом работы над крупнейшими телевизионными шоу и кинопроектами.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Марина Козлова",
    position: "Руководитель отдела аренды",
    bio: "Специалист по логистике и администрированию сложных проектов с высокими требованиями.",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const milestones = [
  {
    year: "2010",
    title: "Основание компании",
    description: "Компания StudioRent начала свою деятельность с небольшого набора оборудования для локальных съемок."
  },
  {
    year: "2013",
    title: "Первый крупный проект",
    description: "Обеспечение оборудованием съемок телесериала «Новая жизнь», что стало важным шагом в развитии компании."
  },
  {
    year: "2015",
    title: "Расширение ассортимента",
    description: "Значительное увеличение парка мебели и оборудования, включая уникальные винтажные предметы интерьера."
  },
  {
    year: "2018",
    title: "Открытие нового офиса",
    description: "Переезд в современный офис с большим шоурумом и складскими помещениями для растущей компании."
  },
  {
    year: "2020",
    title: "Запуск онлайн-платформы",
    description: "Создание онлайн-каталога и системы бронирования для улучшения клиентского сервиса."
  },
  {
    year: "2023",
    title: "Международное сотрудничество",
    description: "Начало сотрудничества с зарубежными кинокомпаниями для съемок в России."
  }
];

const partners = [
  {
    name: "Мосфильм",
    logo: "https://images.unsplash.com/photo-1635016288720-caa000c7c0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  },
  {
    name: "Кинокомпания CTB",
    logo: "https://images.unsplash.com/photo-1635016288799-b8a4e32da5a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  },
  {
    name: "ТНТ Продакшн",
    logo: "https://images.unsplash.com/photo-1635016288780-a99baabfb9c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  },
  {
    name: "Первый канал",
    logo: "https://images.unsplash.com/photo-1635016288800-26fc8eb2c411?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  },
  {
    name: "Netflix Россия",
    logo: "https://images.unsplash.com/photo-1635016288880-a8be9a1e3b85?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  },
  {
    name: "Централ Партнершип",
    logo: "https://images.unsplash.com/photo-1635016288820-5665055a1769?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80&blur=30"
  }
];

/**
 * Страница "О нас"
 */
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О компании</h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">Главная</a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>О нас</span>
          </div>
        </div>
      </div>
      
      {/* О компании */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2">StudioRent</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Надежный партнер вашего успешного проекта</h2>
              <p className="text-gray-700 mb-6 text-lg">
                StudioRent специализируется на комплексном обеспечении съемочного процесса необходимым оборудованием и мебелью. 
                С 2010 года мы помогаем создателям фильмов, сериалов и телевизионных шоу реализовывать свои творческие идеи, предоставляя профессиональные решения для съемок.
              </p>
              <p className="text-gray-700 mb-6">
                Наша компания была основана опытными профессионалами киноиндустрии, которые знают не понаслышке о технических потребностях съемочных площадок. 
                За годы работы мы собрали внушительный парк современного оборудования и уникальных предметов мебели, которые помогают воплощать самые смелые идеи режиссеров и художников-постановщиков.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-1">12+</p>
                  <p className="text-gray-600">лет опыта</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-gray-600">проектов</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-1">150+</p>
                  <p className="text-gray-600">клиентов</p>
                </div>
              </div>
              
              <Button className="mt-2">
                Наши проекты <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Съемочная площадка" 
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Съемочный процесс" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Гримерная комната" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1512025316832-8658f04f8a83?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Мебель для съемок" 
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Миссия и ценности */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Наша философия</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Миссия и ценности</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы стремимся обеспечить безупречный сервис и создать комфортные условия для творческого процесса наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="Star" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Миссия</h3>
                <p className="text-gray-600">
                  Помогать творческим командам воплощать свои идеи, предоставляя качественное оборудование и создавая идеальные условия для съемочного процесса.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="Target" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Видение</h3>
                <p className="text-gray-600">
                  Стать ведущим поставщиком комплексных решений для киноиндустрии, устанавливая новые стандарты сервиса и инноваций в отрасли.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Icon name="Heart" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ценности</h3>
                <p className="text-gray-600">
                  Профессионализм, клиентоориентированность, надежность, креативность и страсть к киноискусству - основы нашей работы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* История компании */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">История</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые этапы развития</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              История нашей компании - это путь непрерывного совершенствования и развития для лучшего обслуживания наших клиентов
            </p>
          </div>
          
          <div className="relative">
            {/* Линия времени */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Год */}
                  <div className="md:w-1/2 p-4 flex justify-center md:justify-end">
                    <div className="bg-primary text-white py-2 px-6 rounded-full text-xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Точка на линии */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                  
                  {/* Содержимое */}
                  <div className="md:w-1/2 p-4">
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Команда */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Наша команда</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Профессионалы своего дела</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша команда состоит из опытных специалистов киноиндустрии, которые понимают потребности каждого проекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline">
              Присоединиться к команде <Icon name="Users" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Партнеры */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Сотрудничество</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнеры</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы гордимся долгосрочным сотрудничеством с ведущими компаниями киноиндустрии
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-700 text-center">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default About;
