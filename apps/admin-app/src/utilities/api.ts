const API_URL = process.env.API_URL
const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  thumbnailUrl: string
  published: boolean
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
}

type CreatePost = {
  title: string
  excerpt: string
  category?: string
  thumbnailUrl?: string
  published?: boolean
}

export async function login(credentials: { username: string; password: string }) {
  const res = await fetch(`${PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })

  if (!res.ok) throw await res.json()

  const { access_token } = await res.json()

  document.cookie = `access_token=${access_token}; expires=${new Date(
    new Date().getTime() + 15 * 60 * 1000,
  ).toUTCString()}; path=/;}`
}

export async function createPost(newPost: CreatePost, accessToken: string) {
  const res = await fetch(`${PUBLIC_API_URL}/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}` ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })

  if (!res.ok) throw await res.json()
}

export async function getPosts(accessToken: string) {
  const res = await fetch(`${API_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${accessToken}` ?? "",
    },
  })

  if (!res.ok) throw await res.json()

  const posts: Post[] = await res.json()

  return posts
}

export async function getPostsCategories() {
  const res = await fetch(`${API_URL}/posts/categories`)

  if (!res.ok) throw await res.json()

  const categories: { id: string; name: string }[] = await res.json()

  return categories
}
