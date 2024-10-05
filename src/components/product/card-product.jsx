import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "../ui/badge";
import useCart from "@/hooks/use-cart";

const CardProduct = ({ product }) => {
  const { id, name, description, price, image, category } = product;
  const { addToCart } = useCart();

  return (
    <Card>
      <div className='w-full'>
        <Image
          src={image}
          className='w-full object-cover h-64'
          width={500}
          height={500}
          alt={name}
        />
      </div>
      <CardHeader>
        <Badge variant='outline' className='w-fit mb-2'>
          {category}
        </Badge>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='line-clamp-2'>
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className='flex justify-between'>
        <div className='text-foreground font-bold'>{formatCurrency(price)}</div>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
