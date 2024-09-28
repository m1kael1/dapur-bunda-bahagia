import useCart from "@/hooks/use-cart";
import CartItem from "./cart-item";
import { ScrollArea } from "../ui/scroll-area";

const ListCartItem = () => {
  const {
    data: cartItems,
    addQuantity,
    removeQuantity,
    removeChartItem,
  } = useCart();

  console.log(cartItems);
  return (
    <ScrollArea scroll className='whitespace-nowrap rounded-md border'>
      <ul className='flex flex-col gap-8 mt-4 max-h-[70vh]'>
        {cartItems?.map((item, index) => (
          <CartItem
            item={item}
            key={index}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
            removeChartItem={removeChartItem}
          />
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ListCartItem;
