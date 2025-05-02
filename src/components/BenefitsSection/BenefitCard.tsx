
import Icon from "@/components/ui/icon";
import { LucideProps } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  iconName: string;
  fallbackIcon?: string;
};

const BenefitCard = ({ title, description, iconName, fallbackIcon }: BenefitCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover-scale">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        <Icon name={iconName} className="text-purple-700" fallback={fallbackIcon} size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
