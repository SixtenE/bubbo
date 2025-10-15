import { relations } from "drizzle-orm";
import { pgTable, varchar, text } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const lists = pgTable("lists", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
});

export const listsRelations = relations(lists, ({ many }) => ({
  items: many(items),
}));

export const items = pgTable("items", {
  id: text("id")
    .$defaultFn(() => nanoid())
    .primaryKey(),
  listId: text("list_id").references(() => lists.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
});

export const itemsRelations = relations(items, ({ one }) => ({
  list: one(lists, {
    fields: [items.listId],
    references: [lists.id],
  }),
}));
