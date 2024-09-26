import CartItem from "./cart-item";

const ListCartItem = () => {
  return (
    <ul className='flex flex-col gap-8 mt-4'>
      {Array(4)
        .fill(0)
        .map((item, index) => (
          <CartItem key={index} />
        ))}
    </ul>
  );
};

export default ListCartItem;
