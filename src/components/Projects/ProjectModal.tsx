
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Project, ProjectCategory } from "./constants";

interface ProjectModalProps {
  project: Project;
  categories: ProjectCategory[];
  onClose: () => void;
}

/**
 * Модальное окно с детальной информацией о проекте
 */
const ProjectModal = ({ project, categories, onClose }: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <Badge className="mb-2">
                {categories.find((c) => c.id === project.category)?.name || project.category}
              </Badge>
              <h2 className="text-2xl font-bold">{project.title}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" className="h-5 w-5" />
            </Button>
          </div>

          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />

            <div className="grid grid-cols-3 gap-2">
              {project.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Галерея ${index + 1}`}
                  className="h-24 w-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Год</h4>
              <p>{project.year}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Клиент</h4>
              <p>{project.client}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Категория</h4>
              <p>
                {categories.find((c) => c.id === project.category)?.name || project.category}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Описание проекта</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose}>Закрыть</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
