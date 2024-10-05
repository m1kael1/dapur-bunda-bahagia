import CartItem from "./cart-item";
import { ScrollArea } from "../ui/scroll-area";

const ListCartItem = ({ items }) => {
  return (
    <ScrollArea scroll className='whitespace-nowrap rounded-md border'>
      <ul className='flex flex-col gap-8 mt-4 max-h-[70vh]'>
        {items?.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ListCartItem;
