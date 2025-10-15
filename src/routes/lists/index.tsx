import NewListDialog from "@/components/NewListDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listsQueryOptions } from "@/utils/lists";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/lists/")({
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(listsQueryOptions());
  },
});

function RouteComponent() {
  const listsQuery = useSuspenseQuery(listsQueryOptions());

  return (
    <main className="container mx-auto pb-64">
      <header className="flex justify-end p-4">
        <NewListDialog />
      </header>
      <section>
        <ul className="grid grid-cols-1 gap-3 px-2">
          {listsQuery.data.map((item) => (
            <li key={item.id} className="">
              <Link to="/lists/$listId" params={{ listId: String(item.id) }}>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-4">This is a description of the item.</p>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
