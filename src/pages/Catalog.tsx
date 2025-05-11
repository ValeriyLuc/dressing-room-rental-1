import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { categories, products } from "@/components/CatalogSection/constants";
import { Link } from "react-router-dom";

/**
 * Страница каталога товаров
 */
const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Фильтруем товары в зависимости от выбранной категории и поискового запроса
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Сортировка товаров
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // по умолчанию - без сортировки (по популярности)
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Каталог оборудования и мебели
          </h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">
              Главная
            </a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>Каталог</span>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Сайдбар с фильтрами */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Категории</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="category-all"
                    checked={selectedCategory === "all"}
                    onCheckedChange={() => setSelectedCategory("all")}
                  />
                  <label
                    htmlFor="category-all"
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    Все категории
                  </label>
                </div>
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => setSelectedCategory(category.id)}
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="ml-2 text-gray-700 cursor-pointer"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Цена</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">от</label>
                  <Input placeholder="0" className="text-sm py-1" />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">до</label>
                  <Input placeholder="50000" className="text-sm py-1" />
                </div>
              </div>

              <Separator className="my-6" />

              <Button className="w-full">Применить фильтры</Button>
              <Button variant="outline" className="w-full mt-2">
                Сбросить
              </Button>
            </div>
          </div>

          {/* Основной контент */}
          <div className="flex-grow">
            {/* Поиск и сортировка */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="relative w-full md:w-80">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                />
                <Input
                  placeholder="Поиск по каталогу..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <span className="text-gray-600 whitespace-nowrap">
                  Сортировать по:
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Популярности" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Популярности</SelectItem>
                    <SelectItem value="price-asc">
                      Цена (по возрастанию)
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Цена (по убыванию)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Вкладки категорий */}
            <Tabs
              defaultValue="all"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="mb-6"
            >
              <TabsList className="w-full md:w-auto flex flex-wrap">
                <TabsTrigger value="all">Все</TabsTrigger>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    <Link
                      to={`/catalog/${category.id}`}
                      className="flex items-center w-full h-full"
                    >
                      {category.name}
                    </Link>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Результаты поиска */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-1">
                {selectedCategory === "all"
                  ? "Все товары"
                  : categories.find((c) => c.id === selectedCategory)?.name ||
                    "Товары"}
              </h2>
              {selectedCategory !== "all" && (
                <Link
                  to={`/catalog/${selectedCategory}`}
                  className="text-primary hover:underline flex items-center mb-2"
                >
                  Перейти к детальному просмотру категории{" "}
                  <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Link>
              )}
              <p className="text-gray-600">
                Найдено товаров: {sortedProducts.length}
              </p>
            </div>

            {/* Товары */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
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
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <Badge variant="secondary">
                          {product.price} ₽/день
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                          {product.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/catalog/${product.category}`}>
                            Подробнее{" "}
                            <Icon
                              name="ChevronRight"
                              className="ml-1 h-4 w-4"
                            />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <Icon
                  name="SearchX"
                  className="mx-auto h-12 w-12 text-gray-300 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Товары не найдены
                </h3>
                <p className="text-gray-600 mb-6">
                  По вашему запросу ничего не найдено. Попробуйте изменить
                  параметры поиска.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
