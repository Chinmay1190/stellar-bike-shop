
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  useEffect(() => {
    const savedCart = localStorage.getItem('bike-shop-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('bike-shop-cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Quantity Updated",
          description: `${product.name} quantity updated in cart`,
        });
        
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        toast({
          title: "Added to Cart",
          description: `${product.name} added to cart`,
        });
        
        return [...prevCart, { product, quantity }];
      }
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const itemToRemove = prevCart.find(item => item.product.id === productId);
      if (itemToRemove) {
        toast({
          title: "Removed from Cart",
          description: `${itemToRemove.product.name} removed from cart`,
        });
      }
      return prevCart.filter(item => item.product.id !== productId);
    });
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    });
  };
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cart.reduce((total, item) => {
    const price = item.product.discountedPrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
