import { Author, Category, Book, Customer, Order } from './schema';

export async function getAllAuthors() {
  const authors = await Author.find();
  console.log('Authors:', authors);
}

export async function getAllCategories() {
  const categories = await Category.find();
  console.log('Categories:', categories);
}

export async function getAllBooks() {
  const books = await Book.find().populate('author').populate('category');
  console.log('Books:', books);
}

export async function getAllCustomers() {
  const customers = await Customer.find();
  console.log('Customers:', customers);
}

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
