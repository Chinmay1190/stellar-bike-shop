
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, CreditCard, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CheckoutPage = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  
  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }
  
  // Calculate shipping cost (free over 100,000)
  const shippingCost = subtotal > 100000 ? 0 : 1000;
  const total = subtotal + shippingCost;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigate("/checkout/success");
    }, 2000);
    
    toast({
      title: "Processing Payment",
      description: "Please wait while we process your payment...",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping information */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Payment information */}
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-4">Payment Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardExpiry">Expiration Date</Label>
                    <Input
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardCvv">CVV</Label>
                    <Input
                      id="cardCvv"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      placeholder="XXX"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/cart">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Link>
              </Button>
              
              <Button type="submit" disabled={loading}>
                <CreditCard className="h-4 w-4 mr-2" />
                {loading ? "Processing..." : `Pay ${formatPrice(total)}`}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order summary */}
        <div>
          <div className="bg-card border rounded-lg p-6 shadow-sm sticky top-20">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              {/* Order items */}
              <div className="max-h-64 overflow-y-auto pr-2 space-y-3">
                {cart.map(item => {
                  const { product, quantity } = item;
                  const price = product.discountedPrice || product.price;
                  
                  return (
                    <div key={product.id} className="flex gap-3 py-2 border-b">
                      <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">Qty: {quantity}</span>
                          <span className="text-sm font-medium">{formatPrice(price * quantity)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Cost breakdown */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              {/* Security notice */}
              <div className="flex items-center text-xs text-muted-foreground pt-2 border-t">
                <Check className="h-3 w-3 mr-1 text-green-500" />
                Secure checkout powered by Stellar Bikes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
