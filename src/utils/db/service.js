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
      stock: product.stock,
      image: await getImageUrl("products", product.id, product.image),
      category: product.category
    };
  })
  return await Promise.all(products);
};

export const addNewProduct = async (product) => {
  return await pb.collection("products").create(product);
}

export const addNewOrder = async (order) => {
  return await pb.collection("orders").create(order);
}

export const findAllOrder = async () => {
  const data = await pb.collection("orders").getFullList();
  return data
}