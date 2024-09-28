"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCart } from "lucide-react";
import ListCartItem from "./list-cart-item";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { formatCurrency } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

const SheetCart = () => {
  const { data: cartItems, trigger } = useCart();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);
    setTotalPrice(total);
  }, [cartItems, trigger]);

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart className='w-6 h-6' />
      </SheetTrigger>
      <SheetContent side='right' className='w-[400px]'>
        <SheetHeader>
          <SheetTitle className='flex'>
            <div className='flex mx-auto gap-2'>
              <ShoppingCart className='w-6 h-6 mx-auto' />
              <h3>Cart</h3>
            </div>
          </SheetTitle>
          <SheetDescription className='text-center'>
            View your cart.
          </SheetDescription>
        </SheetHeader>

        <ListCartItem />

        <br />
        <h3 className='text-xl font-bold'>{formatCurrency(totalPrice)}</h3>
        <br />
        <SheetFooter>
          <Button className='w-full'>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
