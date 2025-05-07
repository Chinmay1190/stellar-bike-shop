
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { BenefitsBanner } from "@/components/BenefitsBanner";
import { brands, allProducts, categories } from "@/lib/data";
import { BrandCard } from "@/components/BrandCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Get top brands (first 6)
  const topBrands = brands.slice(0, 6);
  
  // Get latest products (last 4)
  const latestProducts = allProducts.slice(-4);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      <BenefitsBanner />
      
      <FeaturedProducts />
      
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-racing mb-4">Top Brands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with the most renowned motorcycle brands worldwide to bring you the best rides.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <FeaturedCategories />
      
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1558979159-2b18a4070a87?q=80&w=2071" 
                  alt="Newsletter" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-racing mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive content.
                </p>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
