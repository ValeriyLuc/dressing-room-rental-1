
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import CTASection from "@/components/CTASection";

// Импортируем компоненты проектов
import ProjectFilters from "@/components/Projects/ProjectFilters";
import ProjectList from "@/components/Projects/ProjectList";
import ProjectModal from "@/components/Projects/ProjectModal";
import StatisticsSection from "@/components/Projects/StatisticsSection";
import WorkProcessSection from "@/components/Projects/WorkProcessSection";

// Импортируем данные
import { 
  projects, 
  projectCategories,
  statistics,
  workProcessSteps 
} from "@/components/Projects/constants";

/**
 * Страница с проектами компании
 */
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Фильтрация проектов по категории
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Получаем выбранный проект
  const projectDetails = selectedProject
    ? projects.find((project) => project.id === selectedProject)
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Хедер страницы */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h1>
          <div className="flex items-center">
            <a href="/" className="text-white/80 hover:text-white">
              Главная
            </a>
            <Icon name="ChevronRight" className="mx-2 h-4 w-4 text-white/60" />
            <span>Проекты</span>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2">
              Портфолио
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Проекты, которыми мы гордимимся
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              За годы работы мы участвовали в сотнях успешных проектов
              различного масштаба. Вот некоторые из них, где наша команда
              обеспечивала техническую часть съемочного процесса.
            </p>
          </div>

          {/* Фильтры проектов */}
          <ProjectFilters 
            categories={projectCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Список проектов */}
          <ProjectList 
            projects={filteredProjects}
            onSelectProject={setSelectedProject}
            emptyMessage={
              filteredProjects.length === 0 
                ? {
                    title: "Проекты не найдены",
                    description: "В данной категории пока нет проектов.",
                    resetAction: () => setSelectedCategory("all")
                  }
                : undefined
            }
          />
        </div>
      </section>

      {/* Модальное окно с деталями проекта */}
      {selectedProject && projectDetails && (
        <ProjectModal
          project={projectDetails}
          categories={projectCategories}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Статистика */}
      <StatisticsSection statistics={statistics} />

      {/* Процесс работы */}
      <WorkProcessSection steps={workProcessSteps} />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Projects;
