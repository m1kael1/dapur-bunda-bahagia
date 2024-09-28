"use client";

import { findAllProduct } from "@/utils/db/service";
import { useEffect, useState } from "react";


export default function useProduct(id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProduct = async () => {
    try {
      setIsLoading(true);
      const products = await findAllProduct();
      setData(products);
    }
    catch (error) {
      console.log(error);
      setError("Failed to get all products");
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!id) {
      getAllProduct();
    }
  }, []);

  return {
    data,
    error,
    isLoading
  }

};
