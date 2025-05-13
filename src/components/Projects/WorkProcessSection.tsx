
import { Badge } from "@/components/ui/badge";

interface WorkStep {
  step: number;
  title: string;
  description: string;
}

/**
 * Компонент с секцией процесса работы
 */
const WorkProcessSection = ({ steps }: { steps: WorkStep[] }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">
            Как мы работаем
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Процесс сотрудничества
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы стремимся сделать процесс работы максимально комфортным и
            эффективным для наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-2xl font-bold text-primary">{step.step}</span>
                {index < steps.length - 1 && (
                  <div className="absolute -right-8 top-1/2 h-0.5 w-16 bg-gray-200 hidden md:block"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
