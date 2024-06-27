import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
  name: { type: String, required: true },
  biography: { type: String },
  genres: [{ type: String }],
  works: [
    {
      title: String,
      publishedYear: Number,
    },
  ],
});

export const Author = model('Author', authorSchema);

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  subcategories: [{ type: String }],
});

export const Category = model('Category', categorySchema);

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number },
  stockQuantity: { type: Number },
  publisher: {
    name: String,
    location: String,
  },
  reviews: [
    {
      reviewer: String,
      text: String,
      rating: Number,
    },
  ],
});

export const Book = model('Book', bookSchema);

const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  orderHistory: [
    {
      orderId: Schema.Types.ObjectId,
      date: Date,
      totalPrice: Number,
    },
  ],
  preferences: {
    favoriteGenres: [{ type: String }],
    favoriteAuthors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
  },
});

export const Customer = model('Customer', customerSchema);

const orderSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  orderDate: { type: Date, default: Date.now },
  totalPrice: { type: Number },
  items: [
    {
      book: { type: Schema.Types.ObjectId, ref: 'Book' },
      quantity: { type: Number, required: true },
      pricePerItem: { type: Number, required: true },
    },
  ],
  paymentInfo: {
    method: String,
    transactionId: String,
  },
});

export const Order = model('Order', orderSchema);
