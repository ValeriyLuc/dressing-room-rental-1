
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056')]
          bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Профессиональные гримерки и мебель для ваших съемок
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Создайте идеальную обстановку для вашего шоу или фильма с нашим премиальным оборудованием
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
        
        <Tabs defaultValue="makeup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="makeup">Гримерки</TabsTrigger>
            <TabsTrigger value="furniture">Мебель</TabsTrigger>
            <TabsTrigger value="lighting">Освещение</TabsTrigger>
            <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
          </TabsList>
          
          <TabsContent value="makeup" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Портативные гримерки', 'Гримерные столы', 'Профессиональные станции'].map((item, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <div className="h-52 bg-gray-200 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-166064871${index + 5000}?w=500&auto=format`}
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item}</h3>
                    <p className="text-gray-600 mb-4">Профессиональное оборудование для создания идеального образа</p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="furniture" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Стулья и кресла', 'Диваны и софы', 'Столы и полки'].map((item, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <div className="h-52 bg-gray-200 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-166064873${index + 5000}?w=500&auto=format`}
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item}</h3>
                    <p className="text-gray-600 mb-4">Функциональная и стильная мебель для любого съемочного процесса</p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="lighting" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Софтбоксы', 'Кольцевые лампы', 'Светодиодные панели'].map((item, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <div className="h-52 bg-gray-200 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-166064875${index + 5000}?w=500&auto=format`}
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item}</h3>
                    <p className="text-gray-600 mb-4">Профессиональное освещение для идеальных съемок</p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="accessories" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Зеркала', 'Органайзеры', 'Кейсы и чемоданы'].map((item, index) => (
                <Card key={index} className="overflow-hidden hover-scale">
                  <div className="h-52 bg-gray-200 relative">
                    <img 
                      src={`https://images.unsplash.com/photo-166064878${index + 5000}?w=500&auto=format`}
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item}</h3>
                    <p className="text-gray-600 mb-4">Необходимые аксессуары для комфортной работы</p>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="Star" className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Премиальное качество</h3>
              <p className="text-gray-600">Все наше оборудование соответствует высоким стандартам качества для профессиональных съемок</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="Truck" className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем оборудование на вашу площадку в течение 24 часов после подтверждения заказа</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="HeadSet" className="text-purple-700" fallback="Headphones" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Техническая поддержка</h3>
              <p className="text-gray-600">Наши специалисты готовы помочь с установкой и настройкой оборудования в любое время</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Анна Смирнова",
              role: "Продюсер, Первый канал",
              text: "Работаем с этой компанией уже более 5 лет. Всегда все вовремя, качество на высоте!",
            },
            {
              name: "Игорь Петров",
              role: "Режиссер",
              text: "Очень удобно, что можно арендовать сразу весь комплект мебели для съемок. Экономит массу времени.",
            },
            {
              name: "Мария Иванова",
              role: "Визажист, СТС",
              text: "Отличные гримерные станции, есть все необходимое для комфортной работы. Рекомендую!",
            }
          ].map((review, index) => (
            <Card key={index} className="p-6 hover-scale">
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-500 mr-1" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-166064${index + 88000}?w=150&auto=format`} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать ваши съемки идеальными?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Свяжитесь с нами прямо сейчас и получите специальное предложение для новых клиентов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PremiumStudio</h3>
              <p className="text-gray-400">Профессиональное оборудование для съемок шоу и фильмов</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Гримерки</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Мебель</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Освещение</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Аксессуары</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О компании</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">О нас</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Клиенты</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Отзывы</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связаться с нами</h4>
              <div className="flex items-center mb-3">
                <Icon name="Phone" className="mr-2 text-gray-400" size={16} />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center mb-3">
                <Icon name="Mail" className="mr-2 text-gray-400" size={16} />
                <span className="text-gray-400">info@premiumstudio.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="mr-2 text-gray-400" size={16} />
                <span className="text-gray-400">Москва, ул. Киностудийная, 42</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 PremiumStudio. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" size={20} />
              </Link>
              <Link to="/" className="text-gray-400 hover:text-white">
                <Icon name="Twitter" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
