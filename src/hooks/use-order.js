import { orderAtom } from "@/lib/atoms";
import { findAllOrder } from "@/utils/db/service";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function useOrder() {
  const [data, setData] = useAtom(orderAtom);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAllOrder = async () => {
    try {
      setIsLoading(true);
      const orders = await findAllOrder();
      setData(orders);
    }
    catch (error) {
      console.log(error);
      setError("Failed to get all orders");
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllOrder();
  }, []);

  return {
    data,
    error,
    isLoading
  };

};
