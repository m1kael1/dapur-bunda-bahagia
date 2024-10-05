"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { AddProductForm } from "../form/add-product-form";

const AddProductDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-2'>
          <Plus size={20} />
          Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Please fill in the form below to add a new product.
        </DialogDescription>
        <AddProductForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
