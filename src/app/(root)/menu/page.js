import FilterProduct from '@/components/product/filter-product'
import ListProduct from '@/components/product/list-product'
import { Filter } from 'lucide-react'
import React from 'react'

const MenuPage = () => {
  return (
    <section className='container mx-auto'>
      <FilterProduct />
      <br />
      <ListProduct />
    </section>
  )
}

export default MenuPage