
import { Project } from "./constants";
import ProjectCard from "./ProjectCard";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
  emptyMessage?: {
    title: string;
    description: string;
    resetAction: () => void;
  };
}

/**
 * Компонент списка проектов
 */
const ProjectList = ({ projects, onSelectProject, emptyMessage }: ProjectListProps) => {
  if (projects.length === 0 && emptyMessage) {
    return (
      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <Icon
          name="SearchX"
          className="mx-auto h-12 w-12 text-gray-300 mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{emptyMessage.title}</h3>
        <p className="text-gray-600 mb-6">{emptyMessage.description}</p>
        <Button onClick={emptyMessage.resetAction}>Показать все проекты</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onSelectProject}
        />
      ))}
    </div>
  );
};

export default ProjectList;
