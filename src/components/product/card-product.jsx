import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import nasiGoreng from "@/assets/nasi-goreng.jpeg";

const CardProduct = () => {
  return (
    <Card>
      <div className='w-full'>
        <Image
          src={nasiGoreng}
          className='w-full object-cover'
          width={300}
          height={300}
          objectFit='cover'
          alt='Nasi Goreng'
        />
      </div>
      <CardHeader>
        <CardTitle>Nasi Goreng</CardTitle>
        <CardDescription className='line-clamp-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          ipsa voluptas aperiam ut, voluptates labore dolorum laboriosam vel
          eius minima tempore repellat, incidunt optio nihil soluta architecto,
          quis voluptatibus omnis?
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex justify-between'>
        <div className='text-foreground font-bold'>Rp. 10.000</div>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
