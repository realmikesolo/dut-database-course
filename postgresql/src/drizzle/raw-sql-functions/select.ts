import { sql } from 'drizzle-orm';
import { db } from '../db';

// Це функція для вибору всіх авторів з таблиці authors за допомогою raw sql запиту
export async function selectAllAuthors() {
  const authors = await db.execute(sql`SELECT * FROM authors;`);

  return authors;
}

// Це функція для вибору всіх категорій з таблиці categories за допомогою raw sql запиту
export async function selectAllCategories() {
  const categories = await db.execute(sql`SELECT * FROM categories;`);

  return categories;
}

// Це функція для вибору всіх книг з таблиці books за допомогою raw sql запиту
export async function selectAllBooks() {
  const books = await db.execute(sql`SELECT * FROM books;`);

  return books;
}

// Це функція для вибору всіх клієнтів з таблиці customers за допомогою raw sql запиту
export async function selectAllCustomers() {
  const customers = await db.execute(sql`SELECT * FROM customers;`);

  return customers;
}

// Це функція для вибору всіх замовлень з таблиці orders за допомогою raw sql запиту
export async function selectAllOrders() {
  const orders = await db.execute(sql`SELECT * FROM orders;`);

  return orders;
}

// Це функція для вибору всіх деталей замовлень з таблиці order_details за допомогою raw sql запиту
export async function selectAllOrderDetails() {
  const orderDetails = await db.execute(sql`SELECT * FROM order_details;`);

  return orderDetails;
}

// Це функція для вибору всіх книг з таблиці books за допомогою raw sql запиту з об'єднанням
export async function selectWithJoins() {
  const result =
    await db.execute(sql`SELECT b.title, a.name AS author_name, COALESCE(SUM(od.quantity), 0) AS total_quantity_ordered
FROM books b
LEFT JOIN order_details od ON b.id = od.book_id
JOIN authors a ON b.author_id = a.id
GROUP BY b.title, a.name;
`);

  return result;
}

// Це функція для вибору всіх книг з таблиці books за допомогою raw sql запиту з фільтрацією
export async function selectWithFilter() {
  const bookWithAuthors = await db.execute(sql`SELECT b.title, a.name AS author, b.price, b.stock_quantity
FROM books b
JOIN authors a ON b.author_id = a.id
WHERE b.price > 20.00;
`);

  return bookWithAuthors;
}

// Це функція для вибору всіх категорій з таблиці categories за допомогою raw sql запиту з агрегацією
export async function selectWithAggregations() {
  const result = await db.execute(sql`SELECT c.name AS category_name, AVG(b.price) AS average_price
FROM books b
JOIN categories c ON b.category_id = c.id
GROUP BY c.name;
`);

  return result;
}
