import Header from '@/components/header'
import FilterProduct from '@/components/product/filter-product'
import ListProduct from '@/components/product/list-product'

const MenuPage = () => {
  return (<>
    <Header />
    <section className='container mx-auto'>
      <FilterProduct />
      <br />
      <ListProduct />
    </section>
  </>
  )
}

export default MenuPage