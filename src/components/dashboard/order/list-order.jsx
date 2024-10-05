import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";

const ListOrder = ({ data }) => {
  return (
    <Table className='w-full'>
      <TableCaption>List of Orders </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order Id</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((order) => (
          <TableRow key={order.id}>
            <TableCell className='font-semibold'>{order.order_id}</TableCell>
            <TableCell className='line-clamp-1'>
              {order.customer_name}
            </TableCell>
            <TableCell>{order.product_name}</TableCell>
            <TableCell>{formatCurrency(order.total_price)}</TableCell>
            <TableCell>{order.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListOrder;
