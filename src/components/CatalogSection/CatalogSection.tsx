
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CategoryTabContent from "./CategoryTabContent";
import { CATEGORIES } from "./constants";

const CatalogSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
      
      <Tabs defaultValue={CATEGORIES[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          {CATEGORIES.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {CATEGORIES.map(category => (
          <CategoryTabContent key={category.id} category={category} />
        ))}
      </Tabs>
    </section>
  );
};

export default CatalogSection;
