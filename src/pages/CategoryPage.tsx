
import { useParams, Link } from "react-router-dom";
import { categories, allProducts } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams();
  
  const category = categories.find(cat => cat.slug === slug);
  const products = allProducts.filter(product => 
    category && product.category === category.name
  );
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/categories">Back to All Categories</Link>
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
        <Link to="/categories" className="hover:text-primary">Categories</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>{category.name}</span>
      </div>
      
      {/* Hero section */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img 
          src={category.image || "https://placehold.co/1200x400?text=Category"} 
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-racing mb-2">{category.name}</h1>
            <p className="max-w-lg">{category.description}</p>
          </div>
        </div>
      </div>
      
      {/* Products grid */}
      <h2 className="text-2xl font-medium mb-6">{products.length} Products in {category.name}</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">There are currently no products in this category.</p>
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

export default CategoryPage;
