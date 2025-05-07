
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { Star, Check, ShoppingCart, ChevronRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = allProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Back to All Products</Link>
        </Button>
      </div>
    );
  }
  
  const { 
    name, 
    brand, 
    category, 
    price, 
    discountedPrice, 
    description, 
    specs, 
    images, 
    inStock, 
    rating 
  } = product;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Find related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.category === category && p.id !== id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link to="/products" className="hover:text-primary">Products</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>{name}</span>
      </div>
      
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Images */}
        <div>
          <div className="mb-4 overflow-hidden rounded-lg border">
            <img
              src={images[activeImageIndex]}
              alt={name}
              className="w-full object-cover object-center h-[400px]"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, i) => (
              <div 
                key={i} 
                className={`cursor-pointer border rounded-md overflow-hidden ${activeImageIndex === i ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setActiveImageIndex(i)}
              >
                <img
                  src={image}
                  alt={`${name} thumbnail ${i+1}`}
                  className="w-full h-24 object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-2">
            <Link 
              to={`/brand/${brand.toLowerCase().replace(' ', '-')}`}
              className="text-muted-foreground hover:text-primary"
            >
              {brand}
            </Link>
          </div>
          
          <h1 className="text-3xl font-racing mb-2">{name}</h1>
          
          <div className="flex items-center mb-4 space-x-2">
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(rating) ? 'text-amber-500 fill-amber-500' : 'text-muted-foreground'}`} />
              ))}
            </div>
            <span className="text-muted-foreground">({rating.toFixed(1)})</span>
          </div>
          
          <div className="flex items-baseline mb-6">
            {discountedPrice ? (
              <>
                <span className="text-2xl font-bold">{formatPrice(discountedPrice)}</span>
                <span className="ml-2 text-lg text-muted-foreground line-through">{formatPrice(price)}</span>
                <Badge className="ml-2 bg-primary text-white">
                  {Math.round((price - discountedPrice) / price * 100)}% OFF
                </Badge>
              </>
            ) : (
              <span className="text-2xl font-bold">{formatPrice(price)}</span>
            )}
          </div>
          
          <div className="prose dark:prose-invert mb-6">
            <p>{description}</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <span className="w-24 text-muted-foreground">Category:</span>
              <Link 
                to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                className="hover:text-primary"
              >
                {category}
              </Link>
            </div>
            
            <div className="flex items-center">
              <span className="w-24 text-muted-foreground">Status:</span>
              {inStock ? (
                <span className="flex items-center text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  In Stock
                </span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
          </div>
          
          {inStock && (
            <div className="flex items-center space-x-4 mb-6">
              <div>
                <label htmlFor="quantity" className="sr-only">Quantity</label>
                <select 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  className="rounded-md border border-input bg-background px-4 py-2"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <Button onClick={handleAddToCart} className="flex-1 gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </div>
          )}
          
          <div className="border-t pt-4">
            <Tabs defaultValue="specs">
              <TabsList>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="pt-4">
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex">
                      <span className="w-1/3 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4 prose dark:prose-invert">
                <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
                <p>
                  We offer free shipping on all orders over ₹100,000. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days.
                </p>
                
                <h3 className="text-lg font-medium mb-2 mt-4">Return Policy</h3>
                <p>
                  You can return your product within 7 days of receiving it. Please contact our customer service team to initiate a return. The product must be in its original packaging and condition.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-racing mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
