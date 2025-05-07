
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070" 
          alt="Superbike" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-racing mb-4 animate-fade-in">
            Experience <span className="text-primary">Ultimate</span> Performance
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Discover the world's finest superbikes. Premium brands, exceptional engineering, and unmatched riding experience.
          </p>
          <div className="flex flex-wrap gap-4" style={{animationDelay: '0.4s'}}>
            <Button size="lg" asChild className="animate-fade-in">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
