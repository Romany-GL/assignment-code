'use client';
import { createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  getCartLength: () => number;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartLength: () => 0,
});

export const useCart = () => {
  return useContext(CartContext);
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: item.quantity },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getCartLength = (): number => {
    let length = 0;
    cart.forEach((item) => {
      length += item.quantity;
    });
    return length;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartLength }}
    >
      {children}
    </CartContext.Provider>
  );
};
