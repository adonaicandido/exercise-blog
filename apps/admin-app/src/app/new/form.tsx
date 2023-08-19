"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Button,
  Checkbox,
  Field,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
} from "@unknown-co/react-ui"

import { createPost } from "~/utilities/api"

const fieldsSchema = z.object({
  slug: z.union([
    z.literal("").transform(() => undefined),
    z
      .string()
      .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers and dashes")
      .min(8, "Slug must contain at least 8 character(s)")
      .max(96, "Slug must contain at most 96 character(s)"),
  ]),
  categoryId: z.string().optional(),
  title: z
    .string()
    .min(8, "Title must contain at least 8 character(s)")
    .max(128, "Title must contain at most 128 character(s)"),
  excerpt: z
    .string()
    .min(256, "Excerpt must contain at least 256 character(s)")
    .max(512, "Excerpt must contain at most 512 character(s)"),
  thumbnailUrl: z.union([z.string().url(), z.literal("").transform(() => undefined)]),
  published: z.boolean().optional(),
})

type Fields = z.infer<typeof fieldsSchema>

type NewPostFormProps = {
  accessToken: string
  categories: { id: string; name: string }[]
}
export function NewPostForm({ accessToken, categories = [] }: NewPostFormProps) {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    setValue,
  } = useForm<Fields>({ resolver: zodResolver(fieldsSchema) })

  async function onSubmit(data: Fields) {
    await createPost(data, accessToken)
    router.refresh()
    router.push("/")
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Field error={!!formErrors.title} message={formErrors.title?.message}>
        <Label htmlFor="title-input">Title</Label>
        <Input id="excerpt-input" {...register("title")} />
      </Field>

      <Field error={!!formErrors.excerpt} message={formErrors.excerpt?.message}>
        <Label htmlFor="excerpt-input">Excerpt</Label>
        <Textarea className="h-144" id="excerpt-input" {...register("excerpt")} />
      </Field>

      <div className="flex gap-24">
        <Field className="flex-1">
          <Label htmlFor="category-input">Category</Label>
          <Select onValueChange={(value) => setValue("categoryId", value)}>
            <SelectTrigger>
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field className="flex-1" error={!!formErrors.slug} message={formErrors.slug?.message}>
          <Label htmlFor="slug-input">Slug</Label>
          <Input id="slug-input" {...register("slug")} />
        </Field>

        <Field
          className="flex-1"
          error={!!formErrors.thumbnailUrl}
          message={formErrors.thumbnailUrl?.message}
        >
          <Label htmlFor="thumbnailUrl-input">Thumbnail</Label>
          <Input id="thumbnailUrl-input" {...register("thumbnailUrl")} />
        </Field>
      </div>

      <Separator className="!my-32 bg-gray-200" />

      <div className="flex gap-24">
        <div className="ml-auto flex items-center space-x-2">
          <Checkbox
            id="publish-input"
            onCheckedChange={(value) => setValue("published", value as boolean)}
          />
          <Label htmlFor="publish-input" className="text-16 font-medium">
            Public
          </Label>
        </div>

        <Button type="submit">Create post</Button>
      </div>
    </form>
  )
}
