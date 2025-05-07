
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-8">About Stellar Bikes</h1>
      
      {/* Hero section */}
      <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2070" 
          alt="Stellar Bikes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="p-6 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-racing mb-4">Premium Superbike Experience</h2>
            <p className="max-w-xl text-lg">
              India's finest curated collection of performance motorcycles from the world's most prestigious brands.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-2xl font-racing mb-6">Our Story</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Founded in 2010, Stellar Bikes has been at the forefront of bringing world-class superbikes to the Indian market. Our journey began with a simple passion for motorcycles and a vision to provide Indian enthusiasts access to the finest bikes from around the world.
            </p>
            <p>
              What started as a small showroom in Mumbai has now grown into a nationwide network of premium motorcycle dealerships, offering sales, service, and accessories for the most prestigious motorcycle brands globally.
            </p>
            <p>
              At Stellar Bikes, we believe that motorcycling is not just a mode of transportation but a lifestyle and a passion. Our team consists of motorcycle enthusiasts who understand the unique relationship between a rider and their machine.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071" 
              alt="Our showroom" 
              className="rounded-lg object-cover h-48 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?q=80&w=2070" 
              alt="Superbikes on display" 
              className="rounded-lg object-cover h-48 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1565876427310-a5234337aa29?q=80&w=1973" 
              alt="Service center" 
              className="rounded-lg object-cover h-48 w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1613160717888-e0b34c1af756?q=80&w=2070" 
              alt="Riding experience" 
              className="rounded-lg object-cover h-48 w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="mb-16 bg-muted/30 p-8 rounded-lg">
        <h2 className="text-2xl font-racing mb-6 text-center">Our Mission</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          To provide motorcycling enthusiasts with the finest riding experiences through world-class products, exceptional service, and fostering a vibrant community of riders.
        </p>
      </div>
      
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-racing mb-8 text-center">Why Choose Stellar Bikes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="mb-4 text-4xl font-racing text-primary">01</div>
            <h3 className="text-xl font-medium mb-3">Authentic Products</h3>
            <p className="text-muted-foreground">
              We are authorized dealers for all the brands we carry, ensuring you get genuine products with manufacturer warranty.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="mb-4 text-4xl font-racing text-primary">02</div>
            <h3 className="text-xl font-medium mb-3">Expert Service</h3>
            <p className="text-muted-foreground">
              Our technicians are factory-trained specialists who treat your bike with the care and attention it deserves.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm text-center">
            <div className="mb-4 text-4xl font-racing text-primary">03</div>
            <h3 className="text-xl font-medium mb-3">Riding Community</h3>
            <p className="text-muted-foreground">
              Join our vibrant community of riders for group rides, track days, and exclusive motorcycling events.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-racing mb-8">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="mb-3 rounded-full overflow-hidden h-40 w-40 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074" 
                alt="Rajiv Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-1">Rajiv Sharma</h3>
            <p className="text-sm text-muted-foreground">CEO & Founder</p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 rounded-full overflow-hidden h-40 w-40 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070" 
                alt="Priya Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-1">Priya Patel</h3>
            <p className="text-sm text-muted-foreground">COO</p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 rounded-full overflow-hidden h-40 w-40 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2074" 
                alt="Arun Kapoor" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-1">Arun Kapoor</h3>
            <p className="text-sm text-muted-foreground">Technical Director</p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 rounded-full overflow-hidden h-40 w-40 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076" 
                alt="Meera Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium mb-1">Meera Singh</h3>
            <p className="text-sm text-muted-foreground">Marketing Head</p>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-primary/10 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-racing mb-4">Ready to Find Your Perfect Ride?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Browse our extensive collection of premium superbikes or visit one of our showrooms for a personalized experience.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link to="/products">Shop Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
