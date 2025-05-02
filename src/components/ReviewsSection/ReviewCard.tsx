
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import type { Review } from "./constants";

type ReviewCardProps = {
  review: Review;
  index: number;
};

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <Card className="p-6 hover-scale">
      <div className="flex items-center mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Icon key={i} name="Star" className="text-yellow-500 mr-1" size={16} />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{review.text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
          <img 
            src={`https://images.unsplash.com/photo-166064${index + 88000}?w=150&auto=format`} 
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{review.name}</p>
          <p className="text-sm text-gray-600">{review.role}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
