
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { Trash2, AlertCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-racing mb-6">Your Cart</h1>
        <div className="bg-card border rounded-lg p-8 text-center">
          <div className="mb-4 flex justify-center">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any bikes to your cart yet.</p>
          <Button asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  // Calculate shipping cost (free over 100,000)
  const shippingCost = subtotal > 100000 ? 0 : 1000;
  const total = subtotal + shippingCost;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-racing mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Cart header */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-2 border-b text-sm font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          
          {/* Cart items */}
          {cart.map(item => {
            const { product, quantity } = item;
            const price = product.discountedPrice || product.price;
            const itemTotal = price * quantity;
            
            return (
              <div key={product.id} className="grid grid-cols-12 gap-4 py-4 border-b items-center">
                {/* Product info */}
                <div className="col-span-12 md:col-span-6 flex items-center">
                  <div className="w-20 h-20 mr-4 rounded-md overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      <Link to={`/product/${product.id}`} className="hover:text-primary">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                    <button 
                      onClick={() => removeFromCart(product.id)}
                      className="text-sm text-red-500 hover:text-red-700 inline-flex items-center"
                    >
                      <Trash2 className="h-3 w-3 mr-1" /> Remove
                    </button>
                  </div>
                </div>
                
                {/* Price */}
                <div className="col-span-4 md:col-span-2 text-center">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Price:</div>
                  {product.discountedPrice ? (
                    <div>
                      <div className="font-medium">{formatPrice(product.discountedPrice)}</div>
                      <div className="text-sm text-muted-foreground line-through">{formatPrice(product.price)}</div>
                    </div>
                  ) : (
                    <div className="font-medium">{formatPrice(product.price)}</div>
                  )}
                </div>
                
                {/* Quantity */}
                <div className="col-span-4 md:col-span-2 text-center">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Quantity:</div>
                  <select 
                    value={quantity} 
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    className="border rounded p-1 w-16"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                {/* Total */}
                <div className="col-span-4 md:col-span-2 text-right font-medium">
                  <div className="md:hidden text-sm text-muted-foreground mb-1">Total:</div>
                  {formatPrice(itemTotal)}
                </div>
              </div>
            );
          })}
          
          {/* Cart actions */}
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
            
            <Button variant="outline" onClick={clearCart} className="text-red-500 hover:text-red-700">
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order summary */}
        <div>
          <div className="bg-card border rounded-lg p-6 shadow-sm sticky top-20">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Including taxes
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6" asChild>
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
            
            <Alert className="mt-6 bg-muted/50">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                Free shipping on all orders above ₹100,000. Standard delivery in 5-7 business days.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
