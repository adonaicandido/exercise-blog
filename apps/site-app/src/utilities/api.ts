const API_URL = process.env.API_URL

interface Post {
  slug: string
  category: { name: string }
  thumbnailUrl: string
  title: string
  excerpt: string
  author: {
    name: string
    pictureUrl: string
  }
  publishedAt: string
}

export async function getLatestPosts() {
  const queryParams = new URLSearchParams({
    limit: "3",
  })

  const res = await fetch(`${API_URL}/posts?${queryParams.toString()}`)
  const posts: Post[] = await res.json()

  return posts
}
