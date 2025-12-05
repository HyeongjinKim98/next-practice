'use server'
import type { Book } from "@/types/book"
import { revalidateTag } from "next/cache"
type CartItem = Pick<Book, 'id' | 'title' | 'price' | 'coverImage'> & {quantity : number}

export const addToCart = async(book : Book)=>{
    try{
        const response = await fetch("http://localhost:4000/cart",{
            cache : 'no-store'
        });
        const cart: CartItem[] = await response.json();
        const existingItem = cart.find(e => e.id === book.id)
        if(existingItem){
            return await updateQuantity(existingItem.id, existingItem.quantity+1)
        }else{
            await fetch("http://localhost:4000/cart",{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({...book, quantity : 1})
        });
        }
        
        return {status : true , message : "장바구니 추가에 성공했습니다."}
    }catch{
        return {status : false , message : "장바구니 추가에 실패했습니다."}
    }
}

export const updateQuantity = async(bookId : number, quantity : number)=>{
    try{
        if(quantity < 0 ) return {status : false , message : "수량은 0개 이상 이어야 합니다"}

        await fetch(`http://localhost:4000/cart/${bookId}`,{
            method : 'PATCH',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({quantity})
        });

        revalidateTag('cart')
        return {status : true , message : "수량이 변경 되었습니다"}
    }catch{
        return {status : false , message : "수량 변경에 실패했습니다"}
    }

}

export const removeCartItem = async(bookId : number)=>{
    try{
        await fetch(`http://localhost:4000/cart/${bookId}`,{
            method : 'DELETE',
        });
        revalidateTag('cart')
        return {status : true , message : "해당 품목이 제거되었습니다"}
    }catch{
        return {status : false , message : "제거 실패"}
    }
}