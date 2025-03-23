'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function getLists() {
  const data = await prisma.list.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return data
}

export async function createList(name: string) {
  const data = await prisma.list.create({
    data: {
      name,
    },
  })
  revalidatePath('/')
  return data
}

export async function deleteLists() {
  const data = await prisma.list.deleteMany()
  revalidatePath('/')
  return data
}
