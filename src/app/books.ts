export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

export const books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', price: 100.02 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12 },
  {
    id: 3,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 15,
  },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 185.65 },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9 },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price: 25 },
  {
    id: 7,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10,
  },
  { id: 8, title: 'Don Quixote', author: 'Miguel de Cervantes', price: 22 },
  { id: 9, title: 'Ulysses', author: 'James Joyce', price: 14 },
  {
    id: 10,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    price: 16,
  },
];
