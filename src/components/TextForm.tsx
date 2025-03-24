'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'
import { createList } from '@/actions'
import { CornerDownLeft } from 'lucide-react'
import { useRef } from 'react'

const FormSchema = z.object({
  item: z.string().nonempty('List item is required'),
})

export default function Page() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      item: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success('Item added!')
    form.reset()
    await createList(data.item)
    textAreaRef.current?.focus()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full max-w-3xl flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  ref={textAreaRef}
                  placeholder="Add item..."
                  className="min-h-28 w-full resize-none rounded-2xl p-4"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      form.handleSubmit(onSubmit)()
                    }
                  }}
                  disabled={form.formState.isSubmitting}
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="absolute top-16 right-4 w-fit self-end"
          disabled={form.formState.isSubmitting}
        >
          <CornerDownLeft size={24} />
        </Button>
      </form>
    </Form>
  )
}
