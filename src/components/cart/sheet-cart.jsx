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

const SheetCart = () => {
  return (
    <Sheet>
      <SheetTrigger className='flex items-center gap-2'>
        <ShoppingCart className='w-6 h-6' />
        <p>Cart</p>
      </SheetTrigger>
      <SheetContent side='right' className='w-[400px]'>
        <SheetHeader>
          <SheetTitle className='flex'>
            <div className='flex mx-auto gap-2'>
              <ShoppingCart className='w-6 h-6 mx-auto' />
              <h3>Cart</h3>
            </div>
          </SheetTitle>
          <SheetDescription>View your cart.</SheetDescription>
        </SheetHeader>
        <ul>
          <ListCartItem />
        </ul>
        <br />
        <SheetFooter>
          <Button className='w-full'>Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
