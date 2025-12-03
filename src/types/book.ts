export interface BookPrice {
  amount: string;
  currencyCode: string;
}

export interface Book {
  id: number;
  slug: string;
  title: string;
  author: string;
  category: string;
  description: string;
  descriptionHtml: string;
  price: BookPrice;
  coverImage: string;
  isNew: boolean;
  rating: number;
  tags: string[];
}

export type CartItem = Pick<Book, 'id' | 'title' | 'price' | 'coverImage'> & {quantity : number}