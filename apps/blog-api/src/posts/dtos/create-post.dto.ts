export class CreatePostDto {
  slug: string
  title: string
  excerpt: string
  categoryId: string
  thumbnailUrl: string

  published: boolean
}
