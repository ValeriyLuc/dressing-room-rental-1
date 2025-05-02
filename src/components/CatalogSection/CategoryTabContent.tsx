
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Category, Product } from "./constants";

interface CategoryTabContentProps {
  category: Category;
  products: Product[];
}

/**
 * Контент вкладки категории в секции каталога
 */
const CategoryTabContent = ({ category, products }: CategoryTabContentProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
      ) : (
        <div className="text-center py-12">
          <Icon name="SearchX" className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h4 className="text-xl font-medium mb-2">Товары не найдены</h4>
          <p className="text-gray-500 mb-4">
            В данной категории пока нет доступных товаров
          </p>
          <Button variant="outline">
            Вернуться к каталогу
          </Button>
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button>
            Смотреть все предложения в категории <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryTabContent;
