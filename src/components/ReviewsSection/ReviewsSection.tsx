
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "./constants";

const ReviewsSection = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
