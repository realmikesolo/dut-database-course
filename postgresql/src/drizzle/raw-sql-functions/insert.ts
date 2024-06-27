import { sql } from 'drizzle-orm';
import { db } from '../db';

// Це функція для заповнення бази даних тестовими даними за допомогою raw sql запитів
export async function seedDb(): Promise<void> {
  // Додавання авторів
  await db.execute(
    sql`INSERT INTO authors (name, biography) VALUES ('J.K. Rowling', 'Author of Harry Potter series');`,
  );
  await db.execute(
    sql`INSERT INTO authors (name, biography) VALUES ('George R.R. Martin', 'Author of A Song of Ice and Fire series');`,
  );
  await db.execute(
    sql`INSERT INTO authors (name, biography) VALUES ('Tolkien', 'Author of The Lord of the Rings');`,
  );

  // Додавання категорій
  await db.execute(sql`INSERT INTO categories (name, description) VALUES ('Fantasy', 'Fantasy books');`);
  await db.execute(
    sql`INSERT INTO categories (name, description) VALUES ('Science Fiction', 'Sci-Fi books');`,
  );
  await db.execute(
    sql`INSERT INTO categories (name, description) VALUES ('Mystery', 'Mystery and thriller books');`,
  );

  // Додавання книг
  await db.execute(
    sql`INSERT INTO books (title, author_id, category_id, price, stock_quantity) VALUES ('Harry Potter and the Philosopher''s Stone', 1, 1, 19.99, 100);`,
  );
  await db.execute(
    sql`INSERT INTO books (title, author_id, category_id, price, stock_quantity) VALUES ('A Game of Thrones', 2, 1, 22.90, 50);`,
  );
  await db.execute(
    sql`INSERT INTO books (title, author_id, category_id, price, stock_quantity) VALUES ('The Fellowship of the Ring', 3, 1, 15.99, 80);`,
  );
  await db.execute(
    sql`INSERT INTO books (title, author_id, category_id, price, stock_quantity) VALUES ('Dune', 2, 2, 18.99, 70);`,
  );

  // Додавання клієнтів
  await db.execute(
    sql`INSERT INTO customers (name, email, address) VALUES ('John Doe', 'johndoe@example.com', '123 Maple Street');`,
  );
  await db.execute(
    sql`INSERT INTO customers (name, email, address) VALUES ('Alice Johnson', 'alicej@example.com', '456 Elm St.');`,
  );
  await db.execute(
    sql`INSERT INTO customers (name, email, address) VALUES ('Bob Smith', 'bobsmith@example.com', '789 Pine St.');`,
  );

  // Додавання замовлень
  await db.execute(
    sql`INSERT INTO orders (customer_id, order_date, total_price) VALUES (1, '2024-06-27', 39.98);`,
  );
  await db.execute(
    sql`INSERT INTO orders (customer_id, order_date, total_price) VALUES (2, '2024-06-28', 45.89);`,
  );
  await db.execute(
    sql`INSERT INTO orders (customer_id, order_date, total_price) VALUES (3, '2024-06-29', 31.98);`,
  );

  // Додавання деталей замовлень
  await db.execute(
    sql`INSERT INTO order_details (order_id, book_id, quantity, price_per_item) VALUES (1, 1, 2, 19.99);`,
  );
  await db.execute(
    sql`INSERT INTO order_details (order_id, book_id, quantity, price_per_item) VALUES (2, 3, 1, 15.99);`,
  );
  await db.execute(
    sql`INSERT INTO order_details (order_id, book_id, quantity, price_per_item) VALUES (2, 4, 2, 18.99);`,
  );
  await db.execute(
    sql`INSERT INTO order_details (order_id, book_id, quantity, price_per_item) VALUES (3, 2, 1, 22.90);`,
  );
}
