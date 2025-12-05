'use client'
import Image from "next/image";
import type { CartItem } from "@/types/book";
import { updateQuantity,removeCartItem } from "@/app/actions/cart";
const CartItems =({cart} :{cart : CartItem[]})=>{

    const handleRemove =(id : number )=>{
        if(confirm("해당 상품을 삭제하시겠습니까?")){
            removeCartItem(id)
        }
    }
    return(
        <>
            <div className="flex flex-col gap-4">
                    {cart.map((item)=>(
                        <div key={item.id} className="flex gap-4 border rounded p-4 relative">
                            <button
                                onClick={()=>handleRemove(item.id)}
                                className="absolute top-4 right-4 rounded bg-red-500 w-6 h-6 text-white">
                                x
                            </button>
                            <Image
                                src={item.coverImage}
                                width={100}
                                height={150}
                                alt={item.title}
                            />
                            <div className="flex flex-col gap-1 w-full">
                                <p className="font-semibold">{item.title}</p>
                                <p className="">{item.price.amount} {item.price.currencyCode}</p>
                                <hr className="mt-auto"/>
                                <div className="flex place-content-between">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={()=>updateQuantity(item.id,item.quantity-1)}
                                            className="bg-gray-500 rounded text-white w-6 h-6 items-center">-</button>
                                        <p className="">{item.quantity}개</p>
                                        <button
                                            onClick={()=>updateQuantity(item.id,item.quantity+1)}
                                            className="bg-gray-500 rounded text-white w-6 h-6 items-center">+</button>
                                    </div>
                                    <p className="text-right">{Number(item.price.amount) * item.quantity} {item.price.currencyCode}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}
export default CartItems;