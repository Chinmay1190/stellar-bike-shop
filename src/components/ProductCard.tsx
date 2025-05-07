
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { id, name, brand, price, discountedPrice, images, inStock, featured } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <Link to={`/product/${id}`}>
      <Card className="product-card group h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={images[0]} 
            alt={name} 
            className="product-image"
          />
          {featured && (
            <Badge className="absolute top-2 left-2 bg-primary text-white">
              Featured
            </Badge>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-semibold px-3 py-1">Out of Stock</span>
            </div>
          )}
        </div>
        
        <CardContent className="pt-4 flex-grow">
          <div className="text-sm text-muted-foreground mb-1">{brand}</div>
          <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-baseline mt-2">
            {discountedPrice ? (
              <>
                <span className="text-lg font-semibold">{formatPrice(discountedPrice)}</span>
                <span className="ml-2 text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="text-lg font-semibold">{formatPrice(price)}</span>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            className="w-full gap-2" 
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
