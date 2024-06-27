import { Author, Category, Book, Customer, Order } from './schema';

export async function deleteAuthor(id) {
  await Author.findByIdAndDelete(id);
  console.log('Author deleted');
}

export async function deleteCategory(id) {
  await Category.findByIdAndDelete(id);
  console.log('Category deleted');
}

export async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
  console.log('Book deleted');
}

export async function deleteCustomer(id) {
  await Customer.findByIdAndDelete(id);
  console.log('Customer deleted');
}

export async function deleteOrder(id) {
  await Order.findByIdAndDelete(id);
  console.log('Order deleted');
}
