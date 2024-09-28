import useCart from "@/hooks/use-cart";
import CartItem from "./cart-item";

const ListCartItem = () => {
  const {
    data: cartItems,
    addQuantity,
    removeQuantity,
    removeChartItem,
  } = useCart();

  console.log(cartItems);
  return (
    <ul className='flex flex-col gap-8 mt-4'>
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
  );
};

export default ListCartItem;
