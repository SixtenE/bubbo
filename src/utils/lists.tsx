import { db } from "@/db";
import { lists } from "@/db/schema";
import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const fetchLists = createServerFn({ method: "GET" }).handler(
  async () => await db.select().from(lists)
);

export const listsQueryOptions = () =>
  queryOptions({
    queryKey: ["lists"],
    queryFn: () => fetchLists(),
  });

export const fetchListById = createServerFn({ method: "GET" })
  .inputValidator((d: { id: string }) => d)
  .handler(async ({ data }) => {
    const list = await db.query.lists.findFirst({
      where: eq(lists.id, data.id),
      with: {
        items: true,
      },
    });
    return list;
  });

export const listQueryOptions = (listId: string) =>
  queryOptions({
    queryKey: ["lists", listId],
    queryFn: () => fetchListById({ data: { id: listId } }),
  });

export const createList = createServerFn({ method: "POST" })
  .inputValidator((d: { title: string }) => d)
  .handler(async ({ data }) => {
    const newList = await db
      .insert(lists)
      .values({
        title: data.title,
      })
      .returning();
    return newList[0];
  });
