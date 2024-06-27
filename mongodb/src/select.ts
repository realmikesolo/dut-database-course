import { Author, Category, Book, Customer, Order } from './schema';

// Отримуємо всіх авторів
export async function getAllAuthors() {
  const authors = await Author.find();
  console.log('Authors:', authors);
}

// Отримуємо всі категорії
export async function getAllCategories() {
  const categories = await Category.find();
  console.log('Categories:', categories);
}

// Отримуємо всі книги
export async function getAllBooks() {
  const books = await Book.find().populate('author').populate('category');
  console.log('Books:', books);
}

// Отримуємо всіх покупців
export async function getAllCustomers() {
  const customers = await Customer.find();
  console.log('Customers:', customers);
}

// Отримуємо всі замовлення
export async function getAllOrders() {
  const orders = await Order.find()
    .populate('customer')
    .populate({
      path: 'items.book',
      populate: {
        path: 'author category',
      },
    });
  console.log('Orders:', orders);
}
