import { eq } from 'drizzle-orm';
import { db } from '../db';
import { authors, books } from '../schema';

// Видалення однієї книги за допомогою ORM
export async function deleteOneBook(bookId: number) {
  await db.delete(books).where(eq(books.id, bookId));
}

// Видалення автора з книгами за допомогою ORM (каскадне видалення, так як видалення автора призведе до видалення всіх його книг. Я це реалізував через зовнішній ключ з обмеженням onDelete: 'cascade')
export async function deleteAuthorWithBooks(authorId: number) {
  await db.delete(authors).where(eq(authors.id, authorId));

  const author = await db.select().from(authors).where(eq(authors.id, authorId));

  const booksResult = await db.select().from(books).where(eq(books.authorId, authorId));

  return {
    author,
    books: booksResult,
  };
}
