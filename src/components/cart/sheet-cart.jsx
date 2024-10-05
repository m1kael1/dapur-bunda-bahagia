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
import { formatCurrency } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import OrderSummary from "../order/order-summary";

const SheetCart = () => {
  const { data: cart } = useCart();

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

        <ListCartItem items={cart.items} />

        <br />
        <h3 className='text-xl font-bold'>{formatCurrency(cart.totalPrice)}</h3>
        <br />
        <SheetFooter>
          <OrderSummary order={cart} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
