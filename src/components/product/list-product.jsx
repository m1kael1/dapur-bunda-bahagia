"use client";

import useProduct from "@/hooks/use-product";
import CardProduct from "./card-product";
import { useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { productSearchTermAtom } from "@/lib/atoms";

const ListProduct = () => {
  const { data: products } = useProduct();
  const [searchTerm] = useAtom(productSearchTermAtom);
  const categoryParams = useSearchParams().get("category");

  const filterBySearchTerm = (product) => {
    if (!searchTerm) return true;
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterByCategory = (product) => {
    if (!categoryParams || categoryParams === "All") return true;
    return product.category === categoryParams;
  };

  const filteredProducts = products?.filter(
    (product) => filterBySearchTerm(product) && filterByCategory(product)
  );

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start w-fit gap-10 sm:mx-auto mx-4'>
      {filteredProducts?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ListProduct;
