import { Author, Category, Book, Customer, Order } from './schema';

// Оновлюємо автора за ID
export async function updateAuthor(id, data) {
  const author = await Author.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Author:', author);
}

// Оновлюємо категорію за ID
export async function updateCategory(id, data) {
  const category = await Category.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Category:', category);
}

// Оновлюємо книгу за ID
export async function updateBook(id, data) {
  const book = await Book.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Book:', book);
}

// Оновлюємо покупця за ID
export async function updateCustomer(id, data) {
  const customer = await Customer.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Customer:', customer);
}

// Оновлюємо замовлення за ID
export async function updateOrder(id, data) {
  const order = await Order.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Order:', order);
}
