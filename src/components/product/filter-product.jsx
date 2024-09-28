"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useProduct from "@/hooks/use-product";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const FilterProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categoryParams = useSearchParams().get("category");
  const router = useRouter();

  const categories = ["All", "Main Course", "Appetizer", "Drink"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    router.push(`?category=${category}`);
  };

  return (
    <div className='flex gap-4 mt-2 flex-col sm:flex-row mx-4 sm:mx-0  '>
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search...'
      />

      <div className='w-full sm:w-1/2'>
        <Select
          value={categoryParams ? categoryParams : "All"}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder='Category' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterProduct;
