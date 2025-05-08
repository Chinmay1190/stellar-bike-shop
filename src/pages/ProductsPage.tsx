
import { useState, useEffect } from 'react';
import { ProductCard } from "@/components/ProductCard";
import { allProducts, brands, categories } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    priceRange: [0, 3000000],
    inStock: false,
    search: "",
    sort: "default",
  });
  
  const maxPrice = Math.max(...allProducts.map(p => p.price));
  
  useEffect(() => {
    let results = [...allProducts];
    
    // Filter by brand
    if (filters.brand) {
      results = results.filter(product => product.brand === filters.brand);
    }
    
    // Filter by category
    if (filters.category) {
      results = results.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    results = results.filter(
      product => {
        const price = product.discountedPrice || product.price;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      }
    );
    
    // Filter by in stock
    if (filters.inStock) {
      results = results.filter(product => product.inStock);
    }
    
    // Filter by search query
    if (filters.search.trim()) {
      const searchLower = filters.search.toLowerCase();
      results = results.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.brand.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort products
    switch (filters.sort) {
      case "price-low":
        results.sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceA - priceB;
        });
        break;
      case "price-high":
        results.sort((a, b) => {
          const priceA = a.discountedPrice || a.price;
          const priceB = b.discountedPrice || b.price;
          return priceB - priceA;
        });
        break;
      case "name-asc":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        results.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting - featured first, then alphabetical
        results.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
    }
    
    setFilteredProducts(results);
  }, [filters]);
  
  const resetFilters = () => {
    setFilters({
      brand: "",
      category: "",
      priceRange: [0, maxPrice],
      inStock: false,
      search: "",
      sort: "default",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-8">All Superbikes</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="lg:w-1/4 space-y-6">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-xl font-medium mb-4">Filters</h2>
            
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Search</label>
                <Input 
                  type="text" 
                  placeholder="Search bikes..."
                  value={filters.search}
                  onChange={(e) => setFilters({...filters, search: e.target.value})}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Brand</label>
                <Select 
                  value={filters.brand} 
                  onValueChange={(value) => setFilters({...filters, brand: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-brands">All Brands</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand.id} value={brand.name}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select 
                  value={filters.category} 
                  onValueChange={(value) => setFilters({...filters, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <span className="text-xs text-muted-foreground">
                    {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
                  </span>
                </div>
                <Slider
                  defaultValue={[0, maxPrice]}
                  value={filters.priceRange}
                  min={0}
                  max={maxPrice}
                  step={50000}
                  onValueChange={(value) => setFilters({...filters, priceRange: value})}
                  className="my-4"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="inStock" 
                  checked={filters.inStock}
                  onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
                  className="h-4 w-4 rounded border-gray-300 focus:ring-primary"
                />
                <label htmlFor="inStock" className="text-sm font-medium">In Stock Only</label>
              </div>
              
              <Button variant="outline" className="w-full" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-muted-foreground">{filteredProducts.length} products found</p>
            </div>
            
            <div className="flex items-center">
              <label className="mr-2 text-sm">Sort by:</label>
              <Select 
                value={filters.sort} 
                onValueChange={(value) => setFilters({...filters, sort: value})}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters to find products.</p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
