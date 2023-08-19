import { cookies } from "next/headers"

import { redirect } from "next/navigation"
import { LoginForm } from "./form"

export default function LoginPage() {
  const accessToken = cookies().get("access_token")?.value

  if (accessToken) redirect("/")

  return (
    <div className="px-16 md:px-32 lg:px-48 xl:px-64">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl leading-9 text-center font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
