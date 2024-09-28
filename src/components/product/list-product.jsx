"use client";

import useProduct from "@/hooks/use-product";
import CardProduct from "./card-product";
import { useSearchParams } from "next/navigation";

const ListProduct = () => {
  const { data: products } = useProduct();
  const categoryParams = useSearchParams().get("category");

  const filteredProducts =
    categoryParams == "All" || !categoryParams
      ? products
      : products?.filter((product) => product.category === categoryParams);

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start w-fit gap-10 sm:mx-auto mx-4'>
      {filteredProducts?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ListProduct;
