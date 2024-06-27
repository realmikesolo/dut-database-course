import { Author, Category, Book, Customer, Order } from './schema';

// Видаляємо автора за ID
export async function deleteAuthor(id) {
  await Author.findByIdAndDelete(id);
  console.log('Author deleted');
}

// Видаляємо категорію за ID
export async function deleteCategory(id) {
  await Category.findByIdAndDelete(id);
  console.log('Category deleted');
}

// Видаляємо книгу за ID
export async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
  console.log('Book deleted');
}

// Видаляємо покупця за ID
export async function deleteCustomer(id) {
  await Customer.findByIdAndDelete(id);
  console.log('Customer deleted');
}

// Видаляємо замовлення за ID
export async function deleteOrder(id) {
  await Order.findByIdAndDelete(id);
  console.log('Order deleted');
}
