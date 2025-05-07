
import { categories } from "@/lib/data";
import { CategoryCard } from "./CategoryCard";

export function FeaturedCategories() {
  // Get only featured categories
  const featuredCategories = categories.filter(category => category.featured);
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-racing mb-4">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of superbike categories to find your perfect riding companion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
