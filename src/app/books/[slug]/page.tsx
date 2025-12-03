import type { Book } from "@/types/book";
import BookDetail from "@/components/BookDetail";
const BookPage = async({
    params
} :  {
    params : Promise<{slug : string}>
})=>{
    const {slug} = await params;
    const response = await fetch(`http://localhost:4000/books?slug=${slug}`,{
        cache : 'no-store'
    });
    const books: Book[] = await response.json();
    const book = books[0];
    return <BookDetail book={book}/>
}
export default BookPage;