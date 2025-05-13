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

  const category = categories.find((cat) => cat.id === categoryId);
  const categoryProducts = products.filter(
    (product) => product.category === categoryId,
  );

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
          url: "https://cdn.poehali.dev/files/3f5cc244-bf81-4bfa-bcda-f7cb247acf86.jpg",
          title: "Гримерные комнаты в павильоне",
        },
        {
          url: "https://cdn.poehali.dev/files/625cc90b-5f85-4bfa-9993-c31434abd0d4.jpg",
          title: "Звукоизоляционная гримерная комната",
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
      additionalInfo:
        "Звукоизоляционная гримерная комната — это специально разработанное пространство, предназначенное для комфортной подготовки участников телевизионных шоу. Она обеспечивает максимальную звуковую изоляцию, что позволяет артистам и телеведущим сосредоточиться на своей работе без отвлекающих шумов с внешней стороны.\n\nОсобенности гримерной комнаты:\n1. Звукоизоляция: Стены, потолок и пол комнаты обработаны специальными звукопоглощающими материалами, предотвращающими проникновение внешнего шума и создающими идеальные условия для подготовки.\n2. Комфортное освещение: Освещение гримерной комнаты регулируется, что позволяет выбрать оптимальный уровень яркости для макияжа и подготовки к выступлению.\n3. Современная мебель: Комната оборудована удобными креслами и зеркалами с подсветкой, а также удобными столами для размещения косметики и аксессуаров.\n4. Вентиляция и климат-контроль: Система вентиляции гарантирует приток свежего воздуха, а климат-контроль поддерживает комфортную температуру и уровень влажности.\n5. Акустические панели: Специальные акустические панели на стенах помогают не только улучшить звукоизоляцию, но и создать эстетически привлекательный интерьер.\n\nЗвукоизоляционная гримерная комната — это идеальное место для подготовки перед выходом на сцену, обеспечивающее участникам необходимый комфорт и концентрацию для достижения наилучших результатов в их выступлениях.",
    },
    accessories: {
      full: 'В категории "Аксессуары" представлены необходимые предметы, которые помогут организовать пространство для гримерки, сделать его более функциональным и удобным.',
      specs: [
        { name: "Тип изделий", value: "Стулья, урны, рейлы с вешалками" },
        { name: "Материалы", value: "Металл, пластик, текстиль" },
        { name: "Стиль", value: "Современный, функциональный" },
        { name: "Мобильность", value: "Легко перемещаемые" },
        { name: "Монтаж", value: "Не требуется или минимальный" },
        { name: "Совместимость", value: "Со всеми типами гримерных комнат" },
      ],
      features: [
        "Функциональные аксессуары для организации пространства",
        "Удобные стулья для комфортной работы",
        "Компактные рейлы для хранения костюмов и одежды",
        "Стильные урны для поддержания чистоты",
        "Легкость транспортировки и установки",
        "Совместимость с другим оборудованием",
      ],
      gallery: [
        {
          url: "https://cdn.poehali.dev/files/78a7165e-39b4-4118-890c-ea8ee21f6226.jpg",
          title: "Основные аксессуары: рейл, урна и стул",
        },
        {
          url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Организация гримерного пространства",
        },
        {
          url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Стулья для гримерной комнаты",
        },
        {
          url: "https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Рейлы для костюмов и одежды",
        },
      ],
      additionalInfo:
        'В категории "Аксессуары" представлены необходимые предметы, которые помогут организовать пространство для гримерки, сделать его более функциональным и удобным.\n\n1. Стулья для гримерки – удобная и стильная мебель для комфортного сидения актёров и моделей во время подготовки к выступлениям или фотосессиям. Эти стулья могут быть с мягкой обивкой, оснащены подлокотниками и регулировкой высоты, чтобы обеспечить максимальный комфорт. Они легко складываются и хранятся, что делает их идеальными для мобильных гримерок.\n\n2. Урна – важный аксессуар, обеспечивающий чистоту и порядок в гримерном пространстве. Компактные и стильные урны помогут поддерживать чистоту, избавляя от ненужного мусора. Они могут быть выполнены в разных дизайнерских решениях, чтобы гармонично вписаться в интерьер гримерки.\n\n3. Рейлы с вешалками – незаменимый элемент для организации одежды и аксессуаров. Такие рейлы позволяют удобно вешать костюмы, платье или другие элементы одежды, сохраняя их в идеальном состоянии. Некоторые модели могут быть телескопическими, что позволяет регулировать их длину в зависимости от потребностей пространства.\n\nЭти аксессуары делают процесс подготовки к выступлениям более гладким и комфортным, создавая организованную и приятную атмосферу в гримерке.',
    },
    furniture: {
      full: "Мебель для съемок - это специально подобранная коллекция предметов интерьера, созданная для использования в съемочном процессе. От винтажных диванов до современных кресел, наша мебель помогает создать нужную атмосферу на съемочной площадке.",
      specs: [
        {
          name: "Стили",
          value: "Современный, ретро, классический, футуристический",
        },
        { name: "Материалы", value: "Дерево, металл, экокожа, текстиль" },
        { name: "Назначение", value: "Для студий, локаций, декораций" },
        { name: "Состояние", value: "Отличное, профессиональное обслуживание" },
        { name: "Доставка", value: "Доступна по Москве и области" },
        { name: "Монтаж", value: "Услуги сборки и расстановки" },
      ],
      features: [
        "Широкий выбор стилей и эпох",
        "Профессиональная подготовка к съемкам",
        "Возможность брендирования для рекламных съемок",
        "Быстрая доставка и монтаж на локации",
        "Комплексные решения для оформления интерьеров",
        "Техническая поддержка на протяжении всего съемочного процесса",
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Мебель для современных интерьеров",
        },
        {
          url: "https://cdn.poehali.dev/files/ca43fcde-3d4a-432e-bd4e-bcce22136f9f.jpg",
          title: "Режиссерское кресло",
        },
        {
          url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Ретро диван для винтажных сцен",
        },
        {
          url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Режиссерские кресла в студии",
        },
      ],
      additionalInfo:
        "Режиссерское кресло — это не просто предмет мебели, а символ творчества и вдохновения. Высокие подлокотники и спинка обеспечивают поддержку во время долгих часов работы. Оно может быть оснащено механизмом, позволяющим регулировать угол наклона, что делает его удобным для различных ситуаций. Часто кресло украшено яркими надписями или логотипами, что подчеркивает индивидуальность его владельца.",
    },
  };

  // Если у нас категория гримерных комнат, обновим галерею с новым изображением
  if (categoryId === "makeup-rooms") {
    categoryData.gallery = [
      {
        url: "https://cdn.poehali.dev/files/3f5cc244-bf81-4bfa-bcda-f7cb247acf86.jpg",
        title: "Гримерные комнаты в павильоне",
      },
      {
        url: "https://cdn.poehali.dev/files/625cc90b-5f85-4bfa-9993-c31434abd0d4.jpg",
        title: "Звукоизоляционная гримерная комната",
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
    ];
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
                {categoryDescriptions[categoryId].specs
                  .slice(0, 4)
                  .map((spec, index) => (
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
          </TabsList>
          <div className="bg-white rounded-lg shadow-sm mt-4 p-6">
            <TabsContent value="description" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
              <p className="text-gray-700 mb-6">
                {categoryDescriptions[categoryId].full}
              </p>

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

              {categoryDescriptions[categoryId].additionalInfo && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-primary">
                  {categoryDescriptions[categoryId].additionalInfo
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                </div>
              )}

              <h4 className="text-lg font-semibold mb-3">
                Особенности и преимущества
              </h4>
              <ul className="space-y-2 mb-6">
                {categoryDescriptions[categoryId].features.map(
                  (feature, index) => (
                    <li key={index} className="flex items-start">
                      <Icon
                        name="CheckCircle"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">
                Технические характеристики
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {categoryDescriptions[categoryId].specs.map((spec, index) => (
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
              <CategoryGallery
                images={categoryDescriptions[categoryId].gallery}
              />
            </TabsContent>
          </div>
        </Tabs>
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
