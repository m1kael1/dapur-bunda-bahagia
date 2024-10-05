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

const ListProduct = ({ data }) => {
  // const { id, name, description, price, image, category } = product;
  return (
    <Table className='w-full'>
      <TableCaption>List of Products </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product) => (
          <TableRow key={product.id}>
            <TableCell className='font-semibold'>{product.name}</TableCell>
            <TableCell className='line-clamp-1'>
              {product.description}
            </TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell className='text-right'>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListProduct;
