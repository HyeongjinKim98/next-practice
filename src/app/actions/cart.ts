'use server'
import type { Book } from "@/types/book"
type CartItem = Pick<Book, 'id' | 'title' | 'price' | 'coverImage'> & {quantity : number}

const addToCart = async(book : Book)=>{
    try{
        const response = await fetch("http://localhost:4000/cart",{
            cache : 'no-store'
        });
        const cart: CartItem[] = await response.json();
        const idx = cart.findIndex(e => e.id === book.id)

        await fetch("http://localhost:4000/cart",{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({...book, quantity : 1})
        });
    }catch{
        return {status : false , message : "장바구니 추가에 실패했습니다."}
    }
}
export deafult addToCart;