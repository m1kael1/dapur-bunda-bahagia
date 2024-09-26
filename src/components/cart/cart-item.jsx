import nasiGoreng from "@/assets/nasi-goreng.jpeg";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Separator } from "../ui/separator";

const CartItem = () => {
  return (
    <section className='flex flex-col gap-4 mx-4 relative'>
      <X className='absolute top-0 right-0 w-4 h-4' color='red' />
      <div className='flex gap-2 items-center'>
        <Image
          src={nasiGoreng}
          className='rounded-lg'
          width={120}
          height={120}
          alt='Nasi Goreng'
        />
        <div className=''>
          <h3 className='text-md'>Nasi Goreng</h3>
          <p className='text-sm'>Rp. 10.000</p>
        </div>
        <br />
        <div className='flex gap-4 items-center'>
          <Plus className='w-4 h-4' />
          <p>0</p>
          <Minus className='w-4 h-4' />
        </div>
      </div>
      <Separator orientation='horizontal' color='black' />
    </section>
  );
};

export default CartItem;
