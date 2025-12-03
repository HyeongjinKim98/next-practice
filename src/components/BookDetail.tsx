"use client";

import Image from "next/image";
import CartButton from "./CartButton";
import type { Book } from "@/types/book";

const BookDetail = ({book} : {book : Book}) => {
    return (
    <div className="flex p-4 gap-4">
        <div className="flex gap-6">
            <Image 
                src={book.coverImage} 
                width={400} 
                height={600} 
                alt={book.title}
            />
        </div>
        <div className="flex flex-col gap-2">
            <div>
                {book.isNew && (
                <span className="text-sm rounded bg-red-500 text-white px-2 py-1">NEW</span>)
            }
            </div>
            <div>
                
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <p className="text-lg text-gray-600">{book.author}</p>
            </div>
            <div>
                <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>
            <div className="flex gap-10">
                <div><p className="font-semibold">카테고리</p><p className="text-sm text-gray-600">{book.category}</p></div>
                <div><p className="font-semibold">평점</p><p className="text-sm text-gray-600">{book.rating}</p></div>
            </div>
            <div className="flex gap-10">
                <div>
                    <p className="font-semibold">태그</p>
                    {book.tags.map(tag=>(
                        <span key={tag} className="border-none rounded px-2 py-1 text-sm bg-black text-white mr-1">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
            <CartButton book={book}/>
        </div>
        
    </div>
    );
};

export default BookDetail;