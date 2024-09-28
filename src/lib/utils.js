import { pb } from "@/utils/db/config";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = number => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number);
};

export const getImageUrl = async (
  colection,
  collectionId,
  fileName
) => {
  const record = await pb.collection(colection).getOne(collectionId);
  const imageUrl = pb.files.getUrl(record, fileName);
  return imageUrl;
};

