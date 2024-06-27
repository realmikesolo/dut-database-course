import { Author, Category, Book, Customer, Order } from './schema';

export async function seedAuthors() {
  const authors = [
    {
      name: 'Charles Dickens',
      biography:
        "English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
      genres: ['Literary Fiction', 'Historical Fiction'],
      works: [
        { title: 'Great Expectations', publishedYear: 1861 },
        { title: 'A Tale of Two Cities', publishedYear: 1859 },
      ],
    },
    {
      name: 'Ernest Hemingway',
      biography:
        'American journalist, novelist, and short-story writer. His economical and understated style had a strong influence on 20th-century fiction.',
      genres: ['Fiction', 'Adventure'],
      works: [
        { title: 'The Old Man and the Sea', publishedYear: 1952 },
        { title: 'A Farewell to Arms', publishedYear: 1929 },
      ],
    },
    {
      name: 'Virginia Woolf',
      biography:
        'English writer, considered one of the most important modernist 20th-century authors and also a pioneer in the use of stream of consciousness as a narrative device.',
      genres: ['Modernist Fiction', 'Literary Criticism'],
      works: [
        { title: 'Mrs Dalloway', publishedYear: 1925 },
        { title: 'To the Lighthouse', publishedYear: 1927 },
      ],
    },
  ];

  for (const author of authors) {
    const newAuthor = new Author(author);
    await newAuthor.save();
  }
}

export async function seedCategories() {
  const categories = [
    {
      name: 'Literary Fiction',
      description:
        'Fictional works that hold literary merit and a focus on style, psychological depth over plot.',
      subcategories: ['Modernist', 'Victorian', 'Stream of Consciousness'],
    },
    {
      name: 'Historical Fiction',
      description:
        'Literary genre where the plot takes place in a setting located in the past, which often involves historical events or figures.',
      subcategories: ['Ancient', 'Medieval', 'Modern'],
    },
    {
      name: 'Thriller',
      description:
        'Genre characterized by fast pacing, frequent action, and resourceful heroes who must thwart the plans of more powerful and better-equipped villains.',
      subcategories: ['Spy Thriller', 'Legal Thriller', 'Medical Thriller'],
    },
  ];

  for (const category of categories) {
    const newCategory = new Category(category);
    await newCategory.save();
  }
}

export async function seedBooks() {
  const authorDickens = await Author.findOne({ name: 'Charles Dickens' });
  const categoryFiction = await Category.findOne({ name: 'Literary Fiction' });

  if (!authorDickens || !categoryFiction) {
    console.error('Required author or category not found!');
    return;
  }

  const books = [
    {
      title: 'Great Expectations',
      author: authorDickens._id,
      category: categoryFiction._id,
      price: 15.2,
      stockQuantity: 100,
      publisher: { name: 'Chapman & Hall', location: 'London' },
      reviews: [{ reviewer: 'John Doe', text: 'A fascinating exploration of Victorian society.', rating: 5 }],
    },
  ];

  for (const book of books) {
    const newBook = new Book(book);
    await newBook.save();
  }
}

export async function seedCustomers() {
  const customers = [
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      address: '789 Pine Rd, Sometown, SM 90123',
      orderHistory: [],
      preferences: { favoriteGenres: ['Literary Fiction', 'Thriller'], favoriteAuthors: [] },
    },
    {
      name: 'Bob White',
      email: 'bob.white@example.com',
      address: '321 Spruce Dr, Anytown, AT 12345',
      orderHistory: [],
      preferences: { favoriteGenres: ['Historical Fiction'], favoriteAuthors: [] },
    },
  ];

  for (const customer of customers) {
    const newCustomer = new Customer(customer);
    await newCustomer.save();
  }
}

export async function seedOrders() {
  const customerAlice = await Customer.findOne({ name: 'Alice Johnson' });
  const bookGreatExpectations = await Book.findOne({ title: 'Great Expectations' });

  if (!customerAlice || !bookGreatExpectations) {
    console.error('Required customer or book not found!');
    return;
  }

  const orders = [
    {
      customer: customerAlice._id,
      totalPrice: 45.6,
      items: [{ book: bookGreatExpectations._id, quantity: 3, pricePerItem: 15.2 }],
      paymentInfo: { method: 'Credit Card', transactionId: 'XYZ123' },
    },
  ];

  for (const order of orders) {
    const newOrder = new Order(order);
    await newOrder.save();
  }
}
