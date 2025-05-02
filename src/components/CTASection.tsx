
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

/**
 * Секция призыва к действию (CTA)
 */
const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы создать идеальные условия для вашего проекта?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут для 
            подбора оптимального решения под ваши задачи и бюджет
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-semibold">
              Оставить заявку
              <Icon name="SendHorizontal" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 hover:bg-white/10">
              Скачать каталог
              <Icon name="Download" className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Icon name="Clock" className="h-8 w-8 mb-3 text-white/80" />
              <p className="font-medium">Оперативная обработка заявок</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="ShieldCheck" className="h-8 w-8 mb-3 text-white/80" />
              <p className="font-medium">Гарантия качества оборудования</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Wallet" className="h-8 w-8 mb-3 text-white/80" />
              <p className="font-medium">Гибкие условия оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
