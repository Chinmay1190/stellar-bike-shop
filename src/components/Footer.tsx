
import { BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <BadgeIndianRupee className="h-6 w-6 text-primary" />
              <span className="font-racing text-xl">STELLAR BIKES</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium superbike store offering the best performance motorcycles from around the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-sm text-muted-foreground hover:text-primary">
                  Brands
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-muted-foreground hover:text-primary">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground mb-2">
                123 Bike Street, Mumbai, Maharashtra, India
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Phone: +91 1234567890
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Email: info@stellarbikes.com
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Stellar Bikes. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
