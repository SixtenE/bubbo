import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { listQueryOptions } from "@/utils/lists";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ChevronLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/lists/$listId")({
  loader: async ({ params: { listId }, context }) => {
    await context.queryClient.ensureQueryData(listQueryOptions(listId));
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { listId } = Route.useParams();
  const listQuery = useSuspenseQuery(listQueryOptions(listId));

  if (!listQuery.data) {
    return <div>List not found</div>;
  }

  return (
    <main className="container mx-auto pb-64">
      <header className="flex justify-between p-4">
        <Link to="/lists">
          <Button variant="neutral" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <Button variant="neutral" size="icon">
          <Settings />
        </Button>
      </header>
      <section className="w-full">
        <h1 className="text-5xl font-bold p-4 font-archivo overflow-hidden line-clamp-2 break-all">
          {listQuery.data.title}
        </h1>
        <ul className="grid grid-cols-1 gap-3 px-2">
          {listQuery.data.items.map((item) => (
            <li key={item.id}>
              <Card>
                <CardContent>
                  <div className="flex gap-2">
                    <Checkbox />
                    <p className="text-sm">{item.content}</p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <div className="fixed bottom-0 flex justify-center left-0 w-full p-8 ">
          <Textarea
            placeholder="Add a new item..."
            className="resize-none h-28 w-full sm:w-1/2 rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
