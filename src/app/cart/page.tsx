'use client'
import type { CartItem } from "@/types/book";
import { useState,useEffect } from "react";
import CartItems from "@/components/CartItems";
const CartPage =()=>{
    const [cart, setCart] = useState<CartItem[]>([]);
    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem("cart")||"[]");
        setCart(storage);
    },[])
    return(
        <>
            <CartItems cart={cart}/>
        </>
    )
}
export default CartPage;