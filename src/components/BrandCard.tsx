
import { Link } from "react-router-dom";
import { Brand } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const { name, slug, logo, description } = brand;
  
  return (
    <Link to={`/brand/${slug}`}>
      <Card className="overflow-hidden group h-full">
        <div className="flex justify-center items-center p-6 h-28 bg-white dark:bg-gray-800">
          <img 
            src={logo} 
            alt={name} 
            className="max-h-full max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
