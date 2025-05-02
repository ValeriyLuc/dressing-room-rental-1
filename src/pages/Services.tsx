
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: "makeup-rooms",
    title: "Аренда гримерных комнат",
    description: "Профессиональные гримерные комнаты различных размеров, полностью оборудованные для работы визажистов и гримеров.",
    features: [
      "Профессиональное освещение",
      "Комфортные кресла",
      "Большие зеркала с подсветкой",
      "Рабочие поверхности для косметики",
      "Розетки для приборов",
      "Вентиляция и кондиционирование"
    ],
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "от 15 000 ₽/день"
  },
  {
    id: "furniture",
    title: "Аренда мебели для съемок",
    description: "Широкий выбор мебели различных стилей для оформления съемочных площадок, от винтажных до современных предметов интерьера.",
    features: [
      "Мебель различных стилей и эпох",
      "Реквизит для оформления сцен",
      "Доставка и монтаж на съемочной площадке",
      "Подбор мебели по цветовой гамме",
      "Консультации дизайнера"
    ],
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "от 3 500 ₽/день"
  },
  {
    id: "lighting",
    title: "Аренда осветительного оборудования",
    description: "Профессиональное световое оборудование для создания нужной атмосферы и качественного освещения на съемочной площадке.",
    features: [
      "Светодиодные панели",
      "Софтбоксы и отражатели",
      "Направленное и рассеянное освещение",
      "Стойки и крепления",
      "Подключение и настройка"
    ],
    image: "https://images.unsplash.com/photo-1565896311009-382b9e813b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "от 8 000 ₽/день"
  },
  {
    id: "accessories",
    title: "Аренда аксессуаров и дополнительного оборудования",
    description: "Разнообразные аксессуары для завершения образа съемочной площадки и обеспечения комфортной работы команды.",
    features: [
      "Зеркала различных форм и размеров",
      "Вешалки и системы хранения костюмов",
      "Рабочие столы и стулья для команды",
      "Офисная техника (принтеры, сканеры)",
      "Холодильники и кофемашины"
    ],
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "от 2 000 ₽/день"
  }
];

const faqs = [
  {
    question: "Какой минимальный срок аренды оборудования?",
    answer: "Минимальный срок аренды составляет 1 день (24 часа). Для некоторых категорий товаров возможна почасовая аренда, уточняйте у менеджера."
  },
  {
    question: "Какие документы нужны для оформления аренды?",
    answer: "Для юридических лиц: договор аренды, подписанный руководителем компании. Для физических лиц: паспорт, договор аренды и залоговая сумма (или другое обеспечение по договоренности)."
  },
  {
    question: "Как происходит доставка оборудования?",
    answer: "Мы осуществляем доставку собственным транспортом в пределах города и области. Стоимость доставки зависит от объема оборудования и удаленности площадки. Также возможен самовывоз со склада компании."
  },
  {
    question: "Что делать в случае поломки оборудования?",
    answer: "В случае возникновения неисправностей необходимо незамедлительно связаться с нашим менеджером. Мы организуем оперативную замену оборудования или решим проблему на месте с помощью нашей технической команды."
  },
  {
    question: "Возможна ли аренда оборудования с оператором/техником?",
    answer: "Да, мы предоставляем услуги профессиональных техников, которые помогут настроить и обслуживать оборудование во время съемок. Стоимость услуг технического специалиста оговаривается отдельно."
  }
];

/**
 * Страница услуг компании
 */
const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">Главная</a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>Услуги</span>
          </div>
        </div>
      </div>
      
      {/* Карточки услуг */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Что мы предлагаем</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Комплексные решения для съемок</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по обеспечению съемочного процесса необходимым оборудованием и мебелью для создания идеальных условий работы
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 rounded-lg overflow-hidden`}
            >
              {/* Изображение */}
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Информация */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <Badge variant="secondary" className="mb-2 w-fit">
                  {service.price}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Включает в себя:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" className="text-primary mr-2 h-5 w-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>
                    Заказать услугу
                  </Button>
                  <Button variant="outline">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Дополнительные услуги */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2">Дополнительно</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сопутствующие услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Помимо аренды оборудования, мы предлагаем ряд дополнительных услуг для обеспечения комфортной работы съемочной группы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Доставка и монтаж</h3>
              <p className="text-gray-600 mb-4">
                Доставим и установим оборудование в указанное время на съемочной площадке. Наши специалисты проведут монтаж и настройку.
              </p>
              <p className="font-semibold text-primary">от 3 000 ₽</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Icon name="UserCog" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Техническая поддержка</h3>
              <p className="text-gray-600 mb-4">
                Профессиональные техники на площадке для обслуживания оборудования на протяжении всего съемочного процесса.
              </p>
              <p className="font-semibold text-primary">от 10 000 ₽/день</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
                <Icon name="PenTool" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Дизайн интерьеров</h3>
              <p className="text-gray-600 mb-4">
                Создадим дизайн интерьера для съемок по вашему техническому заданию. Подберем мебель и декор в соответствии с концепцией.
              </p>
              <p className="font-semibold text-primary">от 20 000 ₽</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Вопросы и ответы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ответы на наиболее распространенные вопросы о наших услугах и условиях сотрудничества
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="flex justify-center mt-10">
            <Button variant="outline">
              Посмотреть все вопросы <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Services;
