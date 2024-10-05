import { formatCurrency } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { addNewOrder } from "@/utils/db/service";
import { useState } from "react";
import { Input } from "../ui/input";
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/atoms";

const OrderSummary = ({ order }) => {
  const [customerName, setCustomerName] = useState("");
  const [, setCart] = useAtom(cartAtom);
  const [openOrderReviewDialog, setOpenOrderReviewDialog] = useState(false);
  const [openCustomerNameDialog, setOpenCustomerNameDialog] = useState(false);

  const handleCheckout = (items) => {
    const order_id = Math.floor(Math.random() * 100000);
    items.forEach((item) => {
      addNewOrder({
        order_id: order_id,
        customer_name: customerName,
        product_name: item.name,
        quantity: item.quantity,
        total_price: item.price * item.quantity,
      });
    });
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    });
    setCustomerName("");
    // Close all dialogs after checkout
    setOpenOrderReviewDialog(false);
    setOpenCustomerNameDialog(false);
  };

  return (
    <Dialog
      open={openOrderReviewDialog}
      onOpenChange={setOpenOrderReviewDialog}
    >
      <DialogTrigger asChild>
        <Button className='w-full'>Order review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order review</DialogTitle>
          <DialogDescription>
            Please review your order before submitting.
          </DialogDescription>
          <div>
            {order.items.map((item) => (
              <div key={item.id}>
                <p>
                  <span>{item.quantity} x </span>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <p className='font-bold text-lg'>
            Total : <span>{formatCurrency(order.totalPrice)}</span>
          </p>
        </DialogHeader>
        <DialogFooter>
          <Dialog
            open={openCustomerNameDialog}
            onOpenChange={setOpenCustomerNameDialog}
          >
            <DialogTrigger asChild>
              <Button disabled={order.items.length === 0} className='w-full'>
                Checkout
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Customer Name</DialogTitle>
                <DialogDescription>
                  Please fill in the form below to add a new customer.
                </DialogDescription>
                <Input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </DialogHeader>
              <DialogFooter>
                <Button
                  disabled={!customerName}
                  onClick={() => handleCheckout(order.items)}
                >
                  Submit
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
