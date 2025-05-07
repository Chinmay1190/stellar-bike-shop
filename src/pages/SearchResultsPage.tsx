
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { allProducts } from "@/lib/data";
import { Product } from '@/lib/types';
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  
  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.brand.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>Search Results</span>
      </div>
      
      <h1 className="text-3xl font-racing mb-4">Search Results</h1>
      <p className="text-muted-foreground mb-8">
        {searchResults.length} results for "{query}"
      </p>
      
      {searchResults.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <div className="mb-4 flex justify-center">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No results found</h3>
          <p className="text-muted-foreground mb-6">
            We couldn't find any bikes matching your search. Try different keywords or browse our categories.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link to="/products">Browse All Bikes</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/categories">View Categories</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
