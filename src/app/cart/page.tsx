import CartItems from "@/components/CartItems";
import type { CartItem } from "@/types/book";
const CartPage =async()=>{
    const response = await fetch("http://localhost:4000/cart",{
        next: { tags :['cart']},
    });
    const cart : CartItem[] = await response.json();
    return(
        <>
            <CartItems cart={cart}/>
        </>
    )
}
export default CartPage;