import { db } from '../db';
import { authors, books, categories, customers } from '../schema';

// Додавання авторів за допомогою ORM
export async function insertAuthors() {
  await db.insert(authors).values([
    {
      name: 'George R. R. Martin',
      biography:
        'George Raymond Richard Martin, also known as GRRM, is an American novelist and short story writer, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones.',
    },
    {
      name: 'J. R. R. Tolkien',
      biography:
        'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.',
    },
    {
      name: 'J. K. Rowling',
      biography:
        'Joanne Rowling, better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.',
    },
  ]);
}

// Додавання категорій за допомогою ORM
export async function insertCategories() {
  await db.insert(categories).values([
    {
      name: 'Fantasy',
      description:
        'The fantasy genre is a genre of fiction that commonly uses magic and other supernatural phenomena as a primary plot element, theme, or setting.',
    },
    {
      name: 'Science Fiction',
      description:
        'Science fiction is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
    },
    {
      name: 'Mystery',
      description:
        'Mystery fiction is a genre of fiction that usually involves a mysterious death or a crime to be solved. In a closed circle of suspects, each suspect must have a credible motive and a reasonable opportunity for committing the crime.',
    },
  ]);
}

// Додавання книг за допомогою ORM
export async function insertBooks() {
  await db.insert(books).values([
    {
      title: 'A Game of Thrones',
      authorId: 1,
      categoryId: 1,
      price: '25',
      stockQuantity: 100,
    },
    {
      title: 'A Clash of Kings',
      authorId: 1,
      categoryId: 1,
      price: '25',
      stockQuantity: 100,
    },
    {
      title: 'A Storm of Swords',
      authorId: 1,
      categoryId: 1,
      price: '25',
      stockQuantity: 100,
    },
    {
      title: 'The Hobbit',
      authorId: 2,
      categoryId: 1,
      price: '15',
      stockQuantity: 100,
    },
    {
      title: 'The Lord of the Rings',
      authorId: 2,
      categoryId: 1,
      price: '25',
      stockQuantity: 100,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      authorId: 3,
      categoryId: 1,
      price: '20',
      stockQuantity: 100,
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      authorId: 3,
      categoryId: 1,
      price: '20',
      stockQuantity: 100,
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      authorId: 3,
      categoryId: 1,
      price: '20',
      stockQuantity: 100,
    },
  ]);
}

// Додавання клієнтів за допомогою ORM
export async function insertCustomers() {
  await db.insert(customers).values([
    {
      name: 'John Doe',
      email: 'john@email.com',
    },
    {
      name: 'Jane Doe',
      email: 'jane@email.com',
    },
  ]);
}
