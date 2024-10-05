import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import useCart from "@/hooks/use-cart";

const CartItem = ({ item }) => {
  const { removeFromCart, addQuantity, removeQuantity } = useCart();
  const { id, name, price, quantity, image } = item;
  return (
    <section className='flex flex-col gap-4 mx-4 relative'>
      <Button
        className='absolute top-0 right-0'
        onClick={() => {
          removeFromCart(item);
        }}
        variant='ghost'
        size='icon'
      >
        <X className='w-4 h-4' color='red' />
      </Button>
      <div className='flex gap-4 items-center mt-4'>
        <Image
          src={image}
          className='rounded-lg w-[120px] h-[120px] object-cover object-center'
          width={120}
          height={120}
          alt={name}
        />
        <div className='w-full flex flex-col gap-1'>
          <h3 className='text-md font-bold'>{name}</h3>
          <p className='text-md'>{formatCurrency(price * quantity)}</p>
          <QuantityCounter
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
            quantity={quantity}
            id={id}
          />
        </div>
      </div>
      <Separator orientation='horizontal' color='black' />
    </section>
  );
};

export default CartItem;

const QuantityCounter = ({ quantity, addQuantity, removeQuantity, id }) => {
  const handleQuantityChange = (mode) => {
    if (mode === "plus") {
      addQuantity(id);
    } else if (mode === "minus") {
      removeQuantity(id);
    }
  };

  return (
    <div className='flex gap-4 items-center justify-between'>
      <Button
        onClick={() => handleQuantityChange("minus")}
        variant='ghost'
        size='icon'
      >
        <Minus className='w-4 h-4' />
      </Button>
      <p>{quantity}</p>
      <Button
        onClick={() => handleQuantityChange("plus")}
        variant='ghost'
        size='icon'
      >
        <Plus className='w-4 h-4' />
      </Button>
    </div>
  );
};
