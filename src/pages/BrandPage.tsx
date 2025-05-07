
import { useParams, Link } from "react-router-dom";
import { brands, allProducts } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const BrandPage = () => {
  const { slug } = useParams();
  
  const brand = brands.find(b => b.slug === slug);
  const products = allProducts.filter(product => 
    brand && product.brand === brand.name
  );
  
  if (!brand) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Brand Not Found</h1>
        <p className="text-muted-foreground mb-6">The brand you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/brands">Back to All Brands</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link to="/brands" className="hover:text-primary">Brands</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>{brand.name}</span>
      </div>
      
      {/* Brand info */}
      <div className="bg-card rounded-lg overflow-hidden shadow-md mb-8">
        <div className="p-6 md:p-8 md:flex items-center">
          <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="h-24 object-contain"
            />
          </div>
          <div className="md:w-3/4 md:pl-8">
            <h1 className="text-3xl md:text-4xl font-racing mb-4">{brand.name}</h1>
            <p className="text-muted-foreground">{brand.description}</p>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <h2 className="text-2xl font-medium mb-6">{products.length} Bikes from {brand.name}</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">There are currently no products from this brand.</p>
          <Button asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPage;
