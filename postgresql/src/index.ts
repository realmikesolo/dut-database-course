import 'dotenv/config';
import { selectBooksForEachAuthor } from './drizzle/orm-functions/select';

(async () => {
  const a = await selectBooksForEachAuthor();

  console.dir(a, { depth: null });

  process.exit(0);
})();
