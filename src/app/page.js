import Header from '@/components/header'
import FilterProduct from '@/components/product/filter-product'
import ListProduct from '@/components/product/list-product'
import { Suspense } from 'react'

const MenuPage = () => {
  return (<Suspense>
    <Header />
    <section className='container mx-auto'>
      <FilterProduct />
      <br />
      <ListProduct />
    </section>
  </Suspense>
  )
}

export default MenuPage