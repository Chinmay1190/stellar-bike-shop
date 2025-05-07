
import { Link } from "react-router-dom";
import { Category } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { name, slug, image, description } = category;
  
  return (
    <Link to={`/category/${slug}`}>
      <Card className="overflow-hidden group h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image || "https://placehold.co/600x400?text=Category"} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="font-racing text-xl md:text-2xl">{name}</h3>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
