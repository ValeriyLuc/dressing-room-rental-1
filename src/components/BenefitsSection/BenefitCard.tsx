
import Icon from "@/components/ui/icon";
import { Benefit } from "./constants";

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

/**
 * Карточка преимущества для секции преимуществ
 */
const BenefitCard = ({ benefit, index }: BenefitCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="mb-4 bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
        <Icon name={benefit.icon} className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
};

export default BenefitCard;
