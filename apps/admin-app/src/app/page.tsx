import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@unknown-co/react-ui"

import { getPosts } from "~/utilities/api"

export const revalidate = 0

export default async function PostsPage() {
  const accessToken = cookies().get("access_token")?.value

  if (!accessToken) redirect("/login")

  const posts = await getPosts(accessToken)

  return (
    <div className="px-16 md:px-32 lg:px-48 xl:px-64">
      <header className="flex items-center justify-between">
        <h1 className="mb-32 text-32 font-bold">Posts</h1>
        <Button asChild>
          <Link href="/new">Create new post</Link>
        </Button>
      </header>

      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-36">Title</TableHead>
            <TableHead>Excerpt</TableHead>
            <TableHead className="w-36 text-right">Published?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="truncate font-medium">{post.title}</TableCell>
              <TableCell className="truncate">{post.excerpt}</TableCell>
              <TableCell className="text-right">{post.published ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
