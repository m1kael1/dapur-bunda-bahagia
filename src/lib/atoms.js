import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const productsAtom = atom([])

export const cartAtom = atomWithStorage("cart", {
  items: [],
  totalItems: 0,
  totalPrice: 0
})

export const orderAtom = atom([])

export const productSearchTermAtom = atom(null)