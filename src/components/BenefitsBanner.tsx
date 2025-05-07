
import { BadgeDollarSign, Shield, Clock, Truck } from "lucide-react";

export function BenefitsBanner() {
  return (
    <section className="py-8 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1">Free Shipping</h3>
            <p className="text-xs text-muted-foreground">On all orders over ₹100,000</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1">2 Year Warranty</h3>
            <p className="text-xs text-muted-foreground">Full comprehensive coverage</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <BadgeDollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1">Secure Payment</h3>
            <p className="text-xs text-muted-foreground">100% secure transactions</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold mb-1">24/7 Support</h3>
            <p className="text-xs text-muted-foreground">Dedicated customer service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
