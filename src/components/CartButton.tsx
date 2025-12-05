"use client"
import type { Book } from "@/types/book"
import {addToCart} from "@/app/actions/cart"

const CartButton =({book} : {book : Book})=>{

    const handleAddToCart=async()=>{
        const result = await addToCart(book);
        alert(result?.message)
    }
    return(
        <button className="rounded bg-gray-400 text-white px-2 py-1 text-sm" onClick={handleAddToCart}>
            담기
        </button>
    )
}
export default CartButton;