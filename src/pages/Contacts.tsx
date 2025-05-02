
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const contactInfo = [
  {
    icon: "MapPin",
    title: "Адрес",
    details: [
      "г. Москва, ул. Киностудийная, 42",
      "БЦ «Медиа Сити», 3 этаж"
    ]
  },
  {
    icon: "Phone",
    title: "Телефоны",
    details: [
      "+7 (495) 123-45-67 — основной",
      "+7 (495) 765-43-21 — отдел аренды"
    ]
  },
  {
    icon: "Mail",
    title: "Email",
    details: [
      "info@studiorent.ru — общие вопросы",
      "rent@studiorent.ru — аренда оборудования"
    ]
  },
  {
    icon: "Clock",
    title: "Режим работы",
    details: [
      "Пн-Пт: 9:00 - 21:00",
      "Сб-Вс: 10:00 - 18:00"
    ]
  }
];

/**
 * Страница контактов
 */
const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">Главная</a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>Контакты</span>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Карточки с контактами */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Icon name={item.icon} className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Социальные сети */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <Icon name="Send" className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  aria-label="VK"
                >
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи и карта */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="form" className="mb-6">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="form" className="flex-1">Обратная связь</TabsTrigger>
                <TabsTrigger value="map" className="flex-1">Схема проезда</TabsTrigger>
              </TabsList>
              
              {/* Форма обратной связи */}
              <TabsContent value="form">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="bg-primary p-8 text-white">
                        <Badge variant="secondary" className="mb-2">Напишите нам</Badge>
                        <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
                        <p className="mb-6">
                          Заполните форму, и наш менеджер свяжется с вами в ближайшее время для консультации или оформления заказа
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Icon name="CheckCircle" className="h-5 w-5 mr-3" />
                            <span>Быстрый ответ в течение 30 минут</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="CheckCircle" className="h-5 w-5 mr-3" />
                            <span>Индивидуальный подход к каждому клиенту</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="CheckCircle" className="h-5 w-5 mr-3" />
                            <span>Специальные условия для постоянных клиентов</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Ваше имя</Label>
                            <Input id="name" placeholder="Иван Иванов" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" placeholder="+7 (___) ___-__-__" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="example@mail.ru" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="message">Сообщение</Label>
                            <Textarea id="message" placeholder="Опишите ваш запрос или задайте вопрос" rows={4} />
                          </div>
                          
                          <Button type="submit" className="w-full">
                            Отправить сообщение
                          </Button>
                          
                          <p className="text-sm text-gray-500 text-center">
                            Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
                          </p>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Карта */}
              <TabsContent value="map">
                <Card className="border-0 shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-[500px] bg-gray-100">
                      {/* Здесь должна быть интеграция с картой, но пока используем заглушку */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Icon name="Map" className="h-16 w-16 text-gray-300 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Карта загружается...</h3>
                        <p className="text-gray-500 max-w-md text-center">
                          Мы находимся по адресу: г. Москва, ул. Киностудийная, 42, БЦ «Медиа Сити», 3 этаж
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Как добраться</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium mb-1">На метро:</p>
                          <p className="text-gray-600">
                            От станции метро «Медиагородок» пешком 7 минут по указателям до БЦ «Медиа Сити»
                          </p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">На автомобиле:</p>
                          <p className="text-gray-600">
                            Удобный подъезд с Третьего транспортного кольца. Для клиентов компании первые 3 часа парковки бесплатно.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">Дополнительно</Badge>
            <h2 className="text-3xl font-bold mb-4">Есть вопросы? Мы готовы помочь!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наша команда всегда рада помочь с выбором оборудования или ответить на любые вопросы о наших услугах
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="Phone" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Звоните нам</h3>
                <p className="text-gray-600 mb-4">
                  По всем вопросам вы можете связаться с нами по телефону в рабочее время
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="Mail" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Напишите нам</h3>
                <p className="text-gray-600 mb-4">
                  Отправьте нам сообщение по электронной почте и получите ответ в течение 30 минут
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:info@studiorent.ru">info@studiorent.ru</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm text-center">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon name="MessageSquare" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Онлайн-чат</h3>
                <p className="text-gray-600 mb-4">
                  Свяжитесь с нами через мессенджеры для быстрой консультации в любое время
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Icon name="Send" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Phone" className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contacts;
