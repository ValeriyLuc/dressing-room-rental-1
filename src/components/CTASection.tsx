
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Готовы сделать ваши съемки идеальными?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами прямо сейчас и получите специальное предложение для новых клиентов
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">
            Заказать звонок
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Посмотреть каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
