
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Project } from "./constants";

interface ProjectCardProps {
  project: Project;
  onClick: (projectId: string) => void;
}

/**
 * Компонент для отображения карточки проекта
 */
const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="border-0 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(project.id)}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <Badge>{project.year}</Badge>
        </div>
        <p className="text-gray-500 mb-3">Клиент: {project.client}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <Button variant="ghost" size="sm" className="mt-2">
          Подробнее <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
