
import { Badge } from "@/components/ui/badge";
import BenefitCard from "./BenefitCard";
import { benefits } from "./constants";

/**
 * Секция преимуществ сервиса аренды гримерок и мебели
 */
const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Почему мы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Работа с нами - это комфорт, профессионализм и уверенность в том, что технические аспекты 
            вашего проекта будут реализованы на высшем уровне
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={benefit.id} 
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
