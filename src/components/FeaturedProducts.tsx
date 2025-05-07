
import { allProducts } from "@/lib/data";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  // Get only featured products
  const featuredProducts = allProducts.filter(product => product.featured);
  
  return (
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-racing mb-4">Featured Bikes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most impressive and powerful superbikes available today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
