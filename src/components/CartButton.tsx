"use client"
import type { Book } from "@/types/book"

type CartItem = Pick<Book, 'id' | 'title' | 'price' | 'coverImage'> & {quantity : number}

const CartButton =({book} : {book : Book})=>{

    const handleAddToCart=()=>{
        const cart : CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const idx = cart.findIndex(e => e.id === book.id)

        if(idx > -1) {
            cart[idx].quantity +=1
        }else{
            cart.push({...book, quantity : 1});
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        alert("장바구니에 추가되었습니다")
    }
    return(
        <button className="rounded bg-gray-400 text-white px-2 py-1 text-sm" onClick={handleAddToCart}>
            담기
        </button>
    )
}
export default CartButton;