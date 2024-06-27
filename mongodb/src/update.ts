import { Author, Category, Book, Customer, Order } from './schema';

export async function updateAuthor(id, data) {
  const author = await Author.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Author:', author);
}

export async function updateCategory(id, data) {
  const category = await Category.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Category:', category);
}

export async function updateBook(id, data) {
  const book = await Book.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Book:', book);
}

export async function updateCustomer(id, data) {
  const customer = await Customer.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Customer:', customer);
}

export async function updateOrder(id, data) {
  const order = await Order.findByIdAndUpdate(id, data, { new: true });
  console.log('Updated Order:', order);
}
