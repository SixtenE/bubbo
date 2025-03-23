import TextForm from '@/components/TextForm'

import { List } from '@prisma/client'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const data: List[] = []
  //await getLists()

  return (
    <div className="mx-auto flex w-full flex-col items-center px-4 lg:w-3/4">
      <TextForm />

      <ul className="flex w-full flex-wrap gap-2">
        {data.map((list) => (
          <li
            key={list.id}
            className="border-input flex w-full rounded-md border bg-neutral-900 p-3"
          >
            <p className="">{list.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
