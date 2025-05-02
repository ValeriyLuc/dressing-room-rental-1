
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ReviewCard from "./ReviewCard";
import { reviews } from "./constants";

/**
 * Секция отзывов клиентов
 */
const ReviewsSection = () => {
  return (
    <section className="py-16 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы гордимся доверием ведущих специалистов киноиндустрии, которые выбирают нас для реализации своих проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gray-50 p-6 rounded-lg max-w-lg">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Quote" className="h-10 w-10 text-primary/40" />
            </div>
            <p className="italic text-gray-700 mb-4">
              "Качество сервиса превзошло все ожидания. Редко встречаешь такой уровень профессионализма и внимания к деталям в нашей индустрии."
            </p>
            <p className="font-semibold">Дмитрий Нагиев</p>
            <p className="text-sm text-gray-600">Актер и телеведущий</p>
          </div>
          
          <Button variant="outline" className="mt-8">
            Смотреть все отзывы <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
