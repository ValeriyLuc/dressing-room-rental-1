
import { TabsContent } from "@/components/ui/tabs";
import CategoryCard from "./CategoryCard";
import type { Category } from "./constants";

type CategoryTabContentProps = {
  category: Category;
};

const CategoryTabContent = ({ category }: CategoryTabContentProps) => {
  return (
    <TabsContent value={category.id} className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <CategoryCard 
            key={index}
            title={item.title}
            description={item.description || category.description}
            imageUrl={`https://images.unsplash.com/photo-${item.imageId || `166064${index + 5000}`}?w=500&auto=format`}
            index={index}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default CategoryTabContent;
