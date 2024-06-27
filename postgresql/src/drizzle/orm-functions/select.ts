import { eq } from 'drizzle-orm';
import { db } from '../db';
import { authors, books, categories, customers, orderDetails, orders } from '../schema';

// Вибірка всіх авторів за допомогою ORM
export async function selectAllAuthors() {
  const result = await db.select().from(authors);

  return result;
}

// Вибірка всіх книг для кожного автора за допомогою ORM (mapping)
export async function selectBooksForEachAuthor() {
  const groupedByAuthor: {
    [authorId: number]: {
      authorId: number;
      authorName: string;
      books: Array<{
        booksId: number | null;
        title: string | null;
        price: string | null;
      }>;
    };
  } = {};

  const result = await db
    .select({
      authorId: authors.id,
      authorName: authors.name,
      booksId: books.id,
      title: books.title,
      price: books.price,
    })
    .from(authors)
    .leftJoin(books, eq(authors.id, books.authorId));

  result.forEach((item) => {
    if (!groupedByAuthor[item.authorId]) {
      groupedByAuthor[item.authorId] = {
        authorId: item.authorId,
        authorName: item.authorName,
        books: [],
      };
    }
    if (item.booksId !== null) {
      groupedByAuthor[item.authorId].books.push({
        booksId: item.booksId,
        title: item.title,
        price: item.price,
      });
    }
  });

  return Object.values(groupedByAuthor);
}

// Вибірка всіх категорій за допомогою ORM
export async function selectAllCategories() {
  const result = await db.select().from(categories);

  return result;
}

// Вибірка всіх книг для категорії за допомогою ORM
export async function selectAllBooksForCategory(categoryId: number) {
  const result = await db
    .select({
      booksId: books.id,
      title: books.title,
      price: books.price,
      categoryId: categories.id,
      categoryName: categories.name,
    })
    .from(books)
    .leftJoin(categories, eq(books.categoryId, categories.id))
    .where(eq(categories.id, categoryId));

  return result;
}

// Вибірка всіх книг за допомогою ORM
export async function selectAllBooks() {
  const result = await db.select().from(books);

  return result;
}

// Вибірка всіх клієнтів за допомогою ORM
export async function selectAllCustomers() {
  const result = await db.select().from(customers);

  return result;
}

// Вибірка всіх замовлень за допомогою ORM
export async function selectAllOrders() {
  const result = await db.select().from(orders);

  return result;
}

// Вибірка всіх деталей замовлення за допомогою ORM
export async function selectAllOrderDetails() {
  const result = await db.select().from(orderDetails);

  return result;
}
