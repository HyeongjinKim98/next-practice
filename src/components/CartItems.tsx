import Image from "next/image";
import type { CartItem } from "@/types/book";
const CartItems =({cart} :{cart : CartItem[]})=>{
    return(
        <>
            <div className="flex flex-col gap-6 p-8 ">
                <h1 className="text-3xl font-bold">
                장바구니
                </h1>
                <div className="flex flex-col gap-4">
                    {cart.map((item)=>(
                        <div key={item.id} className="flex gap-4 border rounded p-4">
                            <Image
                                src={item.coverImage}
                                width={100}
                                height={150}
                                alt={item.title}
                            />
                            <div className="flex flex-col gap-1 w-full">
                                <p className="font-semibold">{item.title}</p>
                                <p className="">{item.price.amount} {item.price.currencyCode}</p>
                                <p className="">{item.quantity}개</p>
                                <hr className="mt-auto"/>
                                <p className="text-right">{Number(item.price.amount) * item.quantity} {item.price.currencyCode}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}
export default CartItems;