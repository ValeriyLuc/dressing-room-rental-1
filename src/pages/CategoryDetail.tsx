import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { categories, products } from "@/components/CatalogSection/constants";
import CategoryGallery from "@/components/CategoryGallery/CategoryGallery";

/**
 * Страница отдельной категории товаров
 */
const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeTab, setActiveTab] = useState("description");

  // Находим выбранную категорию
  const category = categories.find((cat) => cat.id === categoryId);

  // Фильтруем товары по выбранной категории
  const categoryProducts = products.filter(
    (product) => product.category === categoryId,
  );

  // Если категория не найдена
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <Icon
            name="AlertTriangle"
            className="mx-auto h-16 w-16 text-orange-500 mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">Категория не найдена</h1>
          <p className="text-gray-600 mb-8">
            Запрашиваемая категория не существует или была удалена.
          </p>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Описания категорий (в реальном проекте это может приходить с бэкенда)
  const categoryDescriptions: Record<
    string,
    {
      full: string;
      specs: { name: string; value: string }[];
      features: string[];
      gallery: { url: string; title: string }[];
      additionalInfo?: string;
    }
  > = {
    "makeup-rooms": {
      full: "Гримерные комнаты – это профессионально оборудованные пространства, созданные специально для подготовки актеров, моделей или участников съемок к выходу в кадр. Наши гримерные комнаты представляют собой модульные конструкции, которые легко монтируются и трансформируются под нужды конкретного проекта. Каждая комната оснащена профессиональным освещением, комфортной мебелью и всем необходимым для работы гримеров, стилистов и костюмеров.",
      specs: [
        { name: "Площадь", value: "от 6 до 20 м²" },
        { name: "Высота потолков", value: "от 2.2 до 3 м" },
        { name: "Материал стен", value: "ЛДСП, звукоизоляционные панели" },
        { name: "Освещение", value: "светодиодное, регулируемое" },
        { name: "Электропитание", value: "220В, минимум 4 розетки на комнату" },
        { name: "Время монтажа", value: "от 4 часов" },
      ],
      features: [
        "Модульная конструкция для быстрой сборки и разборки",
        "Профессиональное освещение для идеального нанесения грима",
        "Звукоизоляция для комфортной работы",
        "Возможность брендирования и оформления под стиль проекта",
        "Кондиционирование и вентиляция для поддержания комфортного микроклимата",
        "Удобные места для хранения костюмов и аксессуаров",
      ],
      gallery: [
        {
          url: "https://cdn.poehali.dev/files/002e49b4-21e1-493b-9658-062aa8532f63.jpg",
          title: "Гримерные комнаты в павильоне",
        },
        {
          url: "https://images.unsplash.com/photo-1594125894650-8c657936656e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Интерьер гримерной комнаты",
        },
        {
          url: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Рабочее место гримера",
        },
        {
          url: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Система хранения в гримерной",
        },
        {
          url: "https://images.unsplash.com/photo-1631140528121-f3210cc58e8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Освещение гримерной зоны",
        },
      ],
    },
    "makeup-tables": {
      full: "Гримерные столы – это специализированная мебель, разработанная для удобной работы визажистов, гримеров и стилистов. Наши гримерные столы оснащены профессиональным освещением, которое создает идеальные условия для нанесения макияжа, а также имеют удобные места для хранения косметики и аксессуаров.",
      specs: [
        { name: "Ширина", value: "от 80 до 140 см" },
        { name: "Глубина", value: "от 40 до 60 см" },
        { name: "Высота", value: "75-85 см" },
        { name: "Освещение", value: "LED-лампы с регулировкой яркости" },
        { name: "Материал", value: "ЛДСП, МДФ, дерево" },
        { name: "Вес", value: "от 15 до 45 кг" },
      ],
      features: [
        "Профессиональное освещение с регулировкой яркости и цветовой температуры",
        "Большое зеркало для комфортной работы",
        "Ящики и полки для хранения косметики и инструментов",
        "Эргономичный дизайн для комфортной работы",
        "Различные размеры для разных нужд",
        "Возможность выбора цвета и отделки",
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1582544888600-c5f5450d5b6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Стандартный гримерный стол с подсветкой",
        },
        {
          url: "https://images.unsplash.com/photo-1600255821009-45c01293f4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Премиум гримерный стол с ящиками",
        },
        {
          url: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Портативный гримерный стол",
        },
        {
          url: "https://images.unsplash.com/photo-1525904971217-668a1229f066?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Гримерный стол со стулом",
        },
        {
          url: "https://images.unsplash.com/photo-1551197574-af3ace134483?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Рабочее место для визажиста",
        },
      ],
      additionalInfo:
        "У нас вы можете арендовать гримерные столы для любых мероприятий в Москве и Московской области. Мы гарантируем быструю доставку, отличное состояние мебели и демократичные цены. В нашем ассортименте представлено множество различных столов, которые помогут вам выполнить практически любую задачу. Если вас интересует аренда бюджетного гримерного стола, у нас есть предложения, которые вас порадуют. В случае же, если вам нужны уникальные модели в соответствии с особыми требованиями, мы также можем их предоставить. Все зависит от ваших нужд.\n\nСвяжитесь с нашим менеджером прямо сейчас, чтобы получить полную информацию по ценам и доступным вариантам!\n\nАренда гримерных столов — это отличная возможность сократить организационные расходы, ведь аренда обходится значительно дешевле, чем покупка. Это особенно актуально для крупных мероприятий, таких как фестивали, выставки и модные показы.\n\nЕсли вам нужно оборудование всего на несколько дней в год, аренда будет более выгодным решением. Обращаясь к нам, вы получите доступ к любому количеству мебели на нужный вам срок. Звоните, и мы поможем выбрать именно то, что вам необходимо.",
    },
    furniture: {
      full: "Мебель для съемок – это специально подобранные предметы интерьера, которые создают нужную атмосферу и эстетику кадра. В нашей коллекции представлена мебель различных стилей и эпох, от классических до современных моделей. Все предметы мебели поддерживаются в отличном состоянии и регулярно обновляются, чтобы соответствовать актуальным трендам в киноиндустрии и рекламной фотографии.",
      specs: [
        {
          name: "Стили",
          value: "классический, современный, ретро, минимализм",
        },
        { name: "Материалы", value: "дерево, металл, пластик, ткань, кожа" },
        {
          name: "Предметы",
          value: "диваны, кресла, столы, стулья, кровати, шкафы",
        },
        { name: "Состояние", value: "отличное, регулярное обслуживание" },
        {
          name: "Возможности",
          value: "перекраска, перетяжка, модификация под проект",
        },
        { name: "Монтаж", value: "возможность сборки/разборки на месте" },
      ],
      features: [
        "Широкий выбор мебели различных стилей и эпох",
        "Возможность подбора комплектов для создания целостного интерьера",
        "Мебель подходит для различных видов съемок: фильмы, реклама, фотосессии",
        "Профессиональная доставка и установка на съемочной площадке",
        "Возможность аренды отдельных предметов или комплектов",
        "Консультации по выбору мебели под конкретные задачи проекта",
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Ретро диван для исторических съемок",
        },
        {
          url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Современный набор мебели",
        },
        {
          url: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Стильные кресла для интервью",
        },
        {
          url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Минималистичная мебель для современных сцен",
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Комплект мебели для офисных сцен",
        },
      ],
    },
    lighting: {
      full: "Профессиональное осветительное оборудование – неотъемлемая часть любой съемочной площадки. Мы предлагаем широкий спектр современных осветительных приборов, которые помогут создать нужную атмосферу и обеспечить высокое качество изображения. От мощных студийных приборов до компактных портативных решений – у нас есть все необходимое для реализации творческих замыслов.",
      specs: [
        {
          name: "Типы освещения",
          value: "постоянный свет, вспышки, LED-панели",
        },
        { name: "Мощность", value: "от 100Вт до 10кВт" },
        { name: "Цветовая температура", value: "2700K-6500K, RGB" },
        { name: "Управление", value: "ручное, DMX, беспроводное" },
        { name: "Аксессуары", value: "софтбоксы, отражатели, шторки, фильтры" },
        { name: "Питание", value: "сеть 220В, аккумуляторы, генераторы" },
      ],
      features: [
        "Современные светодиодные источники света с регулируемой цветовой температурой",
        "Классические осветительные приборы для традиционных съемок",
        "Специализированное освещение для хромакея и цветокоррекции",
        "Мобильные комплекты для выездных съемок",
        "Профессиональные системы крепления и подвеса света",
        "Техническая поддержка и консультации от специалистов по свету",
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1565896311009-382b9e813b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Профессиональный студийный свет",
        },
        {
          url: "https://images.unsplash.com/photo-1582730147924-d92f4da00252?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Светодиодные панели",
        },
        {
          url: "https://images.unsplash.com/photo-1603203040593-95e5cd786572?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Направленный свет для портретной съемки",
        },
        {
          url: "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Освещение для выездных съемок",
        },
        {
          url: "https://images.unsplash.com/photo-1516035645781-9f126e774e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Комплексное освещение съемочной площадки",
        },
      ],
    },
    accessories: {
      full: "Аксессуары и дополнительное оборудование играют важную роль в создании комфортных и функциональных условий для работы съемочной группы. В нашем ассортименте представлены различные типы аксессуаров – от вешалок для костюмов до зеркал, офисной техники и бытовых приборов. Эти элементы помогают организовать рабочий процесс и обеспечить необходимый комфорт для всех участников съемки.",
      specs: [
        {
          name: "Категории",
          value: "бытовая техника, офисное оборудование, мебельные аксессуюары",
        },
        {
          name: "Зеркала",
          value: "разные размеры и формы, с подсветкой и без",
        },
        { name: "Вешалки", value: "напольные, настенные, передвижные" },
        {
          name: "Техника",
          value: "принтеры, сканеры, кофемашины, холодильники",
        },
        { name: "Декор", value: "вазы, картины, статуэтки, текстиль" },
        { name: "Состояние", value: "новое и отличное" },
      ],
      features: [
        "Широкий выбор зеркал различных форм и размеров для гримерных зон",
        "Функциональные системы хранения для костюмов и реквизита",
        "Бытовая техника для организации питания и отдыха команды",
        "Офисное оборудование для работы администрации съемочной группы",
        "Декоративные элементы для оформления интерьеров в кадре",
        "Возможность комплектации под конкретные нужды проекта",
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Аксессуары для гримерной комнаты",
        },
        {
          url: "https://images.unsplash.com/photo-1595246140613-c118db788e78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Профессиональные зеркала с подсветкой",
        },
        {
          url: "https://images.unsplash.com/photo-1585412459212-8df02a4a6179?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Системы хранения для костюмов",
        },
        {
          url: "https://images.unsplash.com/photo-1606143536311-65d3c0d9c279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Офисное оборудование для работы команды",
        },
        {
          url: "https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          title: "Бытовая техника для комфорта съемочной группы",
        },
      ],
    },
  };

  // Получаем данные для текущей категории
  const categoryData = categoryDescriptions[categoryId || ""] || {
    full: "Подробное описание отсутствует.",
    specs: [],
    features: [],
    gallery: [],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {category.name}
          </h1>
          <div className="flex items-center">
            <Link to="/" className="text-white/80 hover:text-white">
              Главная
            </Link>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <Link to="/catalog" className="text-white/80 hover:text-white">
              Каталог
            </Link>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>{category.name}</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 flex-grow">
        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
              <img
                src={categoryProducts[0]?.image || category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <Badge variant="outline" className="text-lg px-3 py-1">
                  от {Math.min(...categoryProducts.map((p) => p.price))} ₽/день
                </Badge>
              </div>
              <p className="text-gray-700 mb-6">{category.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {categoryData.specs.slice(0, 4).map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm text-gray-500">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Забронировать
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Табы с информацией */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
          </TabsList>
          <div className="bg-white rounded-lg shadow-sm mt-4 p-6">
            <TabsContent value="description" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
              <p className="text-gray-700 mb-6">{categoryData.full}</p>

              {categoryId === "makeup-rooms" && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-primary">
                  <p className="text-gray-700">
                    Зонирование пространства осуществляется с использованием
                    мобильных перегородок, размеры которых стандартно составляют
                    2,5 м х 1 м. Такие перегородки могут быть востребованы в
                    различных ситуациях — от создания подсобных помещений до
                    организации мобильных офисов в условиях выезда. Они часто
                    применяются для формирования гримерных комнат, костюмерных,
                    мини-офисов и помещений любого размера и назначения на ваших
                    мероприятиях.
                  </p>
                </div>
              )}

              <h4 className="text-lg font-semibold mb-3">
                Особенности и преимущества
              </h4>
              <ul className="space-y-2 mb-6">
                {categoryData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">
                Технические характеристики
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {categoryData.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 border-b border-gray-100"
                  >
                    <span className="text-gray-600 mr-2">{spec.name}:</span>
                    <span className="font-medium ml-auto">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gallery" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">
                Галерея изображений
              </h3>
              <CategoryGallery images={categoryData.gallery} />
            </TabsContent>
          </div>
        </Tabs>
        {/* Товары в этой категории */}
        <h2 className="text-2xl font-bold mb-6">Доступное оборудование</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <Badge variant="secondary">{product.price} ₽/день</Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {product.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm">
                    Подробнее{" "}
                    <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Нужна помощь с выбором?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальное оборудование под ваш
            проект и бюджет
          </p>
          <Button size="lg">
            Получить консультацию
            <Icon name="HeadsetHelp" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
