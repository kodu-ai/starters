import Database from 'better-sqlite3';
import { count, eq, ilike } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(new Database('db.sqlite'));

// No native enum support in SQLite, using text for status
export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: text('status').notNull(), // Enum-like behavior
  price: real('price').notNull(), // Using real instead of numeric
  stock: integer('stock').notNull(),
  availableAt: text('available_at').notNull() // You can handle timestamps as text
});

export type SelectProduct = typeof products.$inferSelect;
export const insertProductSchema = createInsertSchema(products);

export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: SelectProduct[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Searching with ilike is still supported
  if (search) {
    return {
      products: await db
        .select()
        .from(products)
        .where(ilike(products.name, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalProducts: 0,
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  const totalProducts = await db.select({ count: count() }).from(products);
  const moreProducts = await db.select().from(products).limit(5).offset(offset);
  const newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts: totalProducts[0].count
  };
}

export async function deleteProductById(id: number) {
  await db.delete(products).where(eq(products.id, id));
}
