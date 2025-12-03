import type { Book } from "@/types/book";
import BookList from "@/components/BookList";
const BooksPage = async () => {
  const response = await fetch("http://localhost:4000/books",{
     next: { revalidate: 10 },
  });
  const books: Book[] = await response.json();
  return (
    <BookList books={books} />
  );
};

export default BooksPage;