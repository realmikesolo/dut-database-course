import { Book, Order } from './schema';

export async function aggregateBooks() {
  // Цей запит агрегує дані з колекції книг та додає до кожної книги детальну інформацію про її автора.
  const result = await Book.aggregate([
    {
      $lookup: {
        from: 'authors', // назва колекції авторів
        localField: 'author', // поле у колекції книг, що зберігає ID автора
        foreignField: '_id', // поле в колекції авторів, що зберігає ID автора
        as: 'authorDetails', // ім'я нового поля, де будуть зберігатися деталі автора
      },
    },
  ]);

  return result;
}

export async function aggregateOrders() {
  // Цей запит використовує $lookup для об'єднання замовлень із деталями покупців,
  // дозволяючи отримати повну інформацію про замовлення та дані покупця для кожного замовлення.
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'customers', // назва колекції покупців
        localField: 'customer', // поле у колекції замовлень, що зберігає ID покупця
        foreignField: '_id', // поле в колекції покупців, що зберігає ID покупця
        as: 'customerDetails', // ім'я нового поля, де будуть зберігатися деталі покупця
      },
    },
  ]);

  return result;
}

export async function getBooksByCategoryWithAuthors() {
  const books = await Book.aggregate([
    {
      $lookup: {
        from: 'categories', // з'єднання з колекцією категорій
        localField: 'category', // поле у колекції книг
        foreignField: '_id', // поле в колекції категорій
        as: 'categoryDetails', // результат зберігаємо сюди
      },
    },
    {
      $unwind: '$categoryDetails', // розгортаємо результати, щоб легше було фільтрувати
    },
    {
      $match: {
        'categoryDetails.name': 'Literary Fiction', // фільтруємо книги за категорією
      },
    },
    {
      $lookup: {
        from: 'authors', // з'єднання з колекцією авторів
        localField: 'author', // поле у колекції книг
        foreignField: '_id', // поле в колекції авторів
        as: 'authorDetails', // результат зберігаємо сюди
      },
    },
    {
      $unwind: '$authorDetails', // розгортаємо результати для зручності виводу
    },
    {
      $project: {
        // вибираємо, які поля показувати у фінальному результаті
        title: 1,
        price: 1,
        stockQuantity: 1,
        'authorDetails.name': 1,
        'authorDetails.biography': 1,
        'categoryDetails.name': 1,
      },
    },
  ]);

  return books;
}
