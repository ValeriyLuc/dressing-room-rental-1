
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCategory } from "./constants";

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

/**
 * Компонент с фильтрами для страницы проектов
 */
const ProjectFilters = ({ categories, selectedCategory, onCategoryChange }: ProjectFiltersProps) => {
  return (
    <Tabs
      defaultValue="all"
      value={selectedCategory}
      onValueChange={onCategoryChange}
      className="mb-10"
    >
      <TabsList className="w-full md:w-auto flex flex-wrap justify-center">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ProjectFilters;
