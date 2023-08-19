import { cookies } from "next/headers"

import { redirect } from "next/navigation"
import { getPostsCategories } from "~/utilities/api"
import { NewPostForm } from "./form"

export default async function NewPostPage() {
  const accessToken = cookies().get("access_token")?.value

  if (!accessToken) redirect("/login")

  const categories = await getPostsCategories()

  return (
    <div className="px-16 md:px-32 lg:px-48 xl:px-64">
      <h1 className="mb-28 text-32 font-bold">New post</h1>

      <NewPostForm accessToken={accessToken as string} categories={categories} />
    </div>
  )
}
