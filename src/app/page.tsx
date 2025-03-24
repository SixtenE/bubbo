import { getLists } from '@/actions'
import TextForm from '@/components/TextForm'

import { List } from '@prisma/client'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const data: List[] = await getLists()

  return (
    <div className="mx-auto flex w-full flex-col items-center px-4 lg:w-3/4">
      <div className="bg-background fixed bottom-0 left-0 flex w-full justify-center py-8">
        <div className="bg-background w-full max-w-3xl">
          <TextForm />
        </div>
      </div>

      <ul className="flex w-full flex-wrap gap-2">
        {data.map((list) => (
          <li
            key={list.id}
            className="border-input bg-muted flex w-full rounded-md border p-3"
          >
            <p className="">{list.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
