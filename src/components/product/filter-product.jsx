"use client";

import { useState } from "react";

const FilterProduct = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Main Course", "Appetizer", "Drink"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-100 rounded-lg'>
      <div className='w-full sm:w-1/2'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search books...'
          className='w-full p-2 border border-gray-300 rounded-md'
        />
      </div>

      <div className='w-full sm:w-1/2'>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className='w-full p-2 border border-gray-300 rounded-md'
        >
          {categories.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterProduct;
