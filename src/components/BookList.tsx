"use client";

import Image from "next/image";
import type { Book } from "@/types/book";
import Link from "next/link";
import CartButton from "./CartButton";

const BookList = ({books} : {books : Book[]}) => {
  return (
    <div className=" p-4">
      <div className="grid grid-cols-5 gap-4">
          {books.map(book => (
            <div
              className="border rounded p-4 flex flex-col gap-2"
              key={book.id}>
                <Image src={book.coverImage} width={200} height={200} alt=""/>
                <div>
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author}</p>
                </div>
                <p className="text-sm text-gray-800 line-clamp-3">{book.description}</p>
                <div className="flex items-center place-content-between mt-auto">
                  <p>{book.price.amount}원</p>
                  <div>
                  <CartButton book={book}/>
                  </div>
                </div>
                <Link href={`/books/${book.slug}`}
                    className="rounded bg-gray-400 text-white px-2 py-1 text-sm text-center"
                    >자세히
                    </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;