'use client'

import ListOrder from "@/components/dashboard/order/list-order";
import useOrder from "@/hooks/use-order";


const OrderPage = () => {

  const { data: products } = useOrder();

  return (
    <div className='p-8 max-h-screen w-full'>
      {/* Table List Product */}
      <br />
      <ListOrder data={products} />
    </div>
  )
}

export default OrderPage