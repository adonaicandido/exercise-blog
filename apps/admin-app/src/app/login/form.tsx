"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button, Field, Input, Label } from "@unknown-co/react-ui"

import { login } from "~/utilities/api"

const fieldsSchema = z.object({
  username: z.string(),
  password: z.string(),
})

type Fields = z.infer<typeof fieldsSchema>

export function LoginForm() {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    setError,
  } = useForm<Fields>({ resolver: zodResolver(fieldsSchema) })

  async function onSubmit(data: Fields) {
    try {
      await login(data)

      router.push("/")
      router.refresh()
    } catch (error) {
      Object.entries(error as Record<string, string>).forEach(([key, value]) => {
        setError(key as keyof Fields, { message: value })
      })
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Field className="flex-1">
        <Label htmlFor="username-input">Username</Label>
        <Input id="username-input" {...register("username")} />
      </Field>

      <Field className="flex-1" error={!!formErrors.root} message={formErrors.root?.message}>
        <Label htmlFor="password-input">Password</Label>
        <Input id="password-input" {...register("password")} />
      </Field>

      <Button className="!mt-24 w-full" type="submit">
        Login
      </Button>
    </form>
  )
}
