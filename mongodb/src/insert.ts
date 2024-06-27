import { Author, Category, Book, Customer, Order } from './schema';

export async function createAuthor(data) {
  const author = new Author(data);
  await author.save();
  console.log('Author created:', author);
}

export async function createCategory(data) {
  const category = new Category(data);
  await category.save();
  console.log('Category created:', category);
}

export async function createBook(data) {
  const book = new Book(data);
  await book.save();
  console.log('Book created:', book);
}

export async function createCustomer(data) {
  const customer = new Customer(data);
  await customer.save();
  console.log('Customer created:', customer);
}

export async function createOrder(data) {
  const order = new Order(data);
  await order.save();
  console.log('Order created:', order);
}
