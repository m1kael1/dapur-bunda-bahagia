'use client'

import { cartAtom } from "@/lib/atoms";
import { useAtom } from "jotai";

export default function useCart() {
  const [data, setData] = useAtom(cartAtom);

  const addToCart = (item) => {
    const existingItem = data.items.find((i) => i.id === item.id);

    if (existingItem) {
      setData((prev) => ({
        ...prev,
        items: prev.items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
        totalItems: prev.totalItems + 1,
        totalPrice: prev.totalPrice + item.price
      }));
    } else {
      setData((prev) => ({
        ...prev,
        items: [...prev.items, { ...item, quantity: 1 }],
        totalItems: prev.totalItems + 1,
        totalPrice: prev.totalPrice + item.price
      }));
    }
  }

  const removeFromCart = (item) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.id !== item.id),
      totalItems: prev.totalItems - item.quantity,
      totalPrice: prev.totalPrice - (item.price * item.quantity)
    }));
  }

  const addQuantity = (id) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.map((i) =>
        i.id === id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ),
      totalItems: prev.totalItems + 1,
      totalPrice: prev.totalPrice + (prev.items.find((i) => i.id === id).price)
    }));
  }

  const removeQuantity = (id) => {
    setData((prev) => {
      if (prev.items.find((i) => i.id === id).quantity === 1) {
        return {
          ...prev,
          items: prev.items.filter((i) => i.id !== id),
          totalItems: prev.totalItems - 1,
          totalPrice: prev.totalPrice - (prev.items.find((i) => i.id === id).price)
        };
      } else {
        return {
          ...prev,
          items: prev.items.map((i) =>
            i.id === id
              ? { ...i, quantity: i.quantity - 1 }
              : i
          ),
          totalItems: prev.totalItems - 1,
          totalPrice: prev.totalPrice - (prev.items.find((i) => i.id === id).price)
        };
      }
    });
  }

  return {
    data,
    addToCart,
    removeFromCart,
    removeQuantity,
    addQuantity
  }
};
