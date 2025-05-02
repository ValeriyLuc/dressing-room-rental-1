
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Review } from "./constants";

interface ReviewCardProps {
  review: Review;
}

/**
 * Карточка отзыва для секции отзывов
 */
const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Рейтинг */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon 
            key={i} 
            name="Star" 
            className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill={i < review.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      
      {/* Контент отзыва */}
      <div className="mb-6 flex-grow">
        <p className="text-gray-700 mb-4">"{review.content}"</p>
        {review.project && (
          <p className="text-sm text-gray-500 italic">Проект: {review.project}</p>
        )}
      </div>
      
      {/* Информация об авторе */}
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src={review.avatar} 
            alt={review.author} 
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{review.author}</h4>
          <p className="text-sm text-gray-600">{review.position}, {review.company}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
