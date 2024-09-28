import nasiGoreng from "@/assets/nasi-goreng.jpeg";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

const CartItem = ({ item, addQuantity, removeQuantity, removeChartItem }) => {
  const { id, name, totalPrice, quantity, image } = item;
  return (
    <section className='flex flex-col gap-4 mx-4 relative'>
      <Button
        className='absolute top-0 right-0'
        onClick={() => removeChartItem(id)}
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
          <p className='text-md'>{formatCurrency(totalPrice)}</p>
          <QuantityCounter
            quantity={quantity}
            removeQuantity={removeQuantity}
            addQuantity={addQuantity}
            id={id}
          />
        </div>
      </div>
      <Separator orientation='horizontal' color='black' />
    </section>
  );
};

export default CartItem;

const QuantityCounter = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleQuantityChange = (mode) => {
    if (mode === "plus") {
      setQuantity((prev) => prev + 1);
      props.addQuantity(props.id);
    } else if (mode === "minus") {
      setQuantity((prev) => prev - 1);
      props.removeQuantity(props.id);
      if (quantity === 0) {
        setQuantity(0);
      }
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
