
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "./constants";
import Icon from "@/components/ui/icon";

interface CategoryCardProps {
  category: Category;
}

/**
 * Карточка категории для секции каталога
 */
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm mb-3">{category.description}</p>
        <div className="flex items-center text-primary font-medium">
          <span>Подробнее</span>
          <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
