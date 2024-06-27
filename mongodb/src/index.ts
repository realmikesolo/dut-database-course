import 'dotenv/config';
import mongoose from 'mongoose';
import { getAllOrders } from './select';

(async () => {
  await mongoose.connect(process.env.MONGO_DB_URL!);
  console.log('Connected to MongoDB');

  const result = await getAllOrders();

  console.log(result);
})();
