'use client'

import AddProductDialog from "@/components/dashboard/product/dialog/add-product-dialog";
import ListProduct from "@/components/dashboard/product/list-product"
import useProduct from "@/hooks/use-product"

const DashboardPage = () => {

  const { data: products } = useProduct();

  return (
    <div className='p-8 max-h-screen w-full'>
      {/* <h1 className='text-2xl font-bold'>Dashboard</h1> */}
      <br />
      {/* Dialog Add New Product */}
      <AddProductDialog />
      <br />
      {/* Table List Product */}
      <ListProduct data={products} />

    </div>
  )
}

export default DashboardPage