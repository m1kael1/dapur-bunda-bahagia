import { getImageUrl } from "@/lib/utils";
import { pb } from "./config";

export const findAllProduct = async () => {
  const data = await pb.collection("products").getFullList();
  const products = data.map(async (product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: await getImageUrl("products", product.id, product.image),
      category: product.category
    };
  })
  return await Promise.all(products);
};