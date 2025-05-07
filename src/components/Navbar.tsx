
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { BadgeIndianRupee, Menu, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="flex items-center space-x-2">
            <BadgeIndianRupee className="h-6 w-6 text-primary" />
            <span className="font-racing text-xl hidden sm:inline-block">STELLAR BIKES</span>
          </Link>
        </div>

        <nav className={`md:flex items-center space-x-6 ${isMenuOpen ? 'absolute top-16 left-0 right-0 flex flex-col items-start p-4 space-y-4 bg-background border-b' : 'hidden'} md:static md:flex-row md:space-y-0 md:p-0 md:border-0`}>
          <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            All Bikes
          </Link>
          <Link to="/categories" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Categories
          </Link>
          <Link to="/brands" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Brands
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Search bikes</SheetTitle>
                <SheetDescription>
                  Search for your favorite superbike by name or brand
                </SheetDescription>
              </SheetHeader>
              <form onSubmit={handleSearch} className="mt-4 space-y-4">
                <Input
                  type="search"
                  placeholder="Search bikes..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="w-full">Search</Button>
              </form>
            </SheetContent>
          </Sheet>
          
          <ThemeToggle />
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs">
                  {totalItems}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
