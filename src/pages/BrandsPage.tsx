
import { brands } from "@/lib/data";
import { BrandCard } from "@/components/BrandCard";

const BrandsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-8">Our Brands</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map(brand => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
