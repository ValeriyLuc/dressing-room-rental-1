
import BenefitCard from "./BenefitCard";
import { BENEFITS } from "./constants";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              iconName={benefit.iconName}
              fallbackIcon={benefit.fallbackIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
