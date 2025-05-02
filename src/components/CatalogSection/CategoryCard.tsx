
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
};

const CategoryCard = ({ title, description, imageUrl, index }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="h-52 bg-gray-200 relative">
        <img 
          src={imageUrl || `https://images.unsplash.com/photo-166064${index}?w=500&auto=format`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
