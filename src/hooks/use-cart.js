'use client'

import { useEffect, useState } from "react";

export default function useCart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const getAllCartItem = () => {
    try {
      const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
      if (!cartItems) {
        window.localStorage.setItem("cartItems", JSON.stringify([]));
      }
      cartItems.map((item) => {
        if (!item.quantity) {
          removeChartItem(item.id)
        }
      })
      setData(cartItems);
    } catch (error) {
      console.log(error)
    }
  }

  const addCartItem = (cartItem) => {
    try {
      const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

      const isExist = cartItems.find((item) => item.id === cartItem.id);

      console.log(isExist)

      if (!isExist) {
        const newCartItems = [...cartItems, {
          ...cartItem,
          quantity: 1,
          totalPrice: cartItem.price
        }];
        window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setTrigger(!trigger)
      }

      if (isExist) {
        const newCartItems = cartItems.map((item) => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1)
            };
          }
          return item;
        });
        window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setTrigger(!trigger)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addQuantity = (id) => {
    try {
      const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1)
          };
        }
        return item;
      })
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger)
    }
    catch (error) {
      console.log(error);
    }
  }

  const removeQuantity = (id) => {
    try {
      const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.price * (item.quantity - 1)
          };
        }
        return item;
      })
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger)
    }
    catch (error) {
      console.log(error);
    }
  }

  const removeChartItem = (id) => {
    try {
      const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
      const newCartItems = cartItems.filter((item) => item.id !== id);
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      setTrigger(!trigger)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCartItem();
  }, [trigger])


  return {
    data,
    error,
    addCartItem,
    removeChartItem,
    addQuantity,
    removeQuantity,
    trigger
  }
};
