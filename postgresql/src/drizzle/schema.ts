import { decimal, integer, pgTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

// Оголошення таблиць
export const authors = pgTable('authors', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  biography: text('biography'),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
});

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  authorId: integer('author_id')
    .references(() => authors.id, { onDelete: 'cascade' }) // onDelete: 'cascade' - видалення автора при видаленні книги (каскадне видалення)
    .notNull(),
  categoryId: integer('category_id')
    .references(() => categories.id, { onDelete: 'cascade' })
    .notNull(),
  price: decimal('price', { precision: 10, scale: 2 }),
  stockQuantity: integer('stock_quantity'),
});

export const customers = pgTable('customers', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(), // unique() - унікальне обмеження
  address: text('address'),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  customerId: integer('customer_id')
    .references(() => customers.id, { onDelete: 'cascade' })
    .notNull(),
  orderDate: timestamp('order_date').notNull().defaultNow(),
  totalPrice: decimal('total_price', { precision: 10, scale: 2 }),
});

export const orderDetails = pgTable(
  'order_details',
  {
    orderId: integer('order_id')
      .references(() => orders.id, { onDelete: 'cascade' })
      .notNull(),
    bookId: integer('book_id')
      .references(() => books.id, { onDelete: 'cascade' })
      .notNull(),
    quantity: integer('quantity').notNull(),
    pricePerItem: decimal('price_per_item', { precision: 10, scale: 2 }).notNull(),
  },
  (t) => ({
    primaryKey: primaryKey({ columns: [t.orderId, t.bookId] }),
  }),
);
