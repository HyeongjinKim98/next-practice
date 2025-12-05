import CartItems from "@/components/CartItems";
import type { CartItem } from "@/types/book";
import { NoContent } from "@/components/NoContents";
const CartPage =async()=>{
    const response = await fetch("http://localhost:4000/cart",{
        next: { tags :['cart']},
    });
    const cart : CartItem[] = await response.json();

    if(cart.length ===0) return <NoContent></NoContent>
    return(
        <>
            <CartItems cart={cart}/>
        </>
    )
}
export default CartPage;