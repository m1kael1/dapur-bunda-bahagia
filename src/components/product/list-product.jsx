import CardProduct from "./card-product";

const ListProduct = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start w-fit gap-10 mx-auto ">
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <CardProduct key={index} />
        ))}
    </ul>
  );
};

export default ListProduct;
