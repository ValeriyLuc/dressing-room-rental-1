
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import CategoryCard from "./CategoryCard";
import CategoryTabContent from "./CategoryTabContent";
import { categories, products } from "./constants";

/**
 * Секция каталога для сайта аренды гримерок и мебели
 */
const CatalogSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-16 bg-white" id="catalog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Наш каталог</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что мы предлагаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Широкий выбор оборудования и мебели для создания идеальных условий на съемочной площадке.
            От мобильных гримерок до винтажной мебели для декораций.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <Tabs 
          defaultValue="all" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">Все категории</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 6).map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {product.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm">
                        Подробнее <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button>
                Смотреть все предложения <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <CategoryTabContent 
                category={category} 
                products={products.filter(p => p.category === category.id)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CatalogSection;
