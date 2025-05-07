
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CheckoutSuccessPage = () => {
  const orderNumber = "SB" + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="bg-card border rounded-lg p-8 shadow-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
            <Check className="h-8 w-8" />
          </div>
        </div>
        
        <h1 className="text-3xl font-racing mb-2">Order Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase! Your order has been received and is now being processed.
        </p>
        
        <div className="bg-muted/30 p-4 rounded-lg mb-6">
          <div className="text-lg mb-1">Order Number:</div>
          <div className="text-2xl font-medium">{orderNumber}</div>
        </div>
        
        <p className="mb-8">
          You will receive an email confirmation with the details of your order and tracking information once your bike is shipped.
        </p>
        
        <div className="space-y-2 flex flex-col">
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-lg font-medium mb-4">What Happens Next?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary mb-2">1</div>
            <h3 className="font-medium mb-2">Order Processing</h3>
            <p className="text-sm text-muted-foreground">
              Your order is being processed and prepared for shipping.
            </p>
          </div>
          
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary mb-2">2</div>
            <h3 className="font-medium mb-2">Bike Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Our team will deliver your bike to your address within 5-7 business days.
            </p>
          </div>
          
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="text-xl font-bold text-primary mb-2">3</div>
            <h3 className="font-medium mb-2">Enjoy Your Ride</h3>
            <p className="text-sm text-muted-foreground">
              Experience the thrill of riding your new superbike!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
