import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreatePostDto } from "./dtos/create-post.dto"
import { Category } from "./entities/category.entity"
import { Post } from "./entities/post.entity"

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
    @InjectRepository(Category) private readonly categoriesRepository: Repository<Category>,
  ) {}

  async insert({ categoryId, title, excerpt, thumbnailUrl, slug, published }: CreatePostDto) {
    const category = await this.categoriesRepository.findOne({ where: { id: categoryId } })

    let errors: { [k: string]: string } = {}

    if (published) {
      if (!categoryId) errors.category = "To publish a post, you need to provide a category."
      if (!slug) errors.slug = "To publish a post, you need to provide a slug."
      if (!thumbnailUrl)
        errors.thumbnailUrl = "To publish a post, you need to provide a thumbnail url."

      if (Object.keys(errors).length > 0) throw new BadRequestException(errors)
    }

    const post = new Post()
    post.slug = slug
    post.thumbnailUrl = thumbnailUrl
    post.title = title
    post.excerpt = excerpt
    post.publishedAt = published ? new Date() : null
    if (category) post.category = category

    try {
      await this.postsRepository.save(post)
    } catch (error) {
      let errors: { [k: string]: string } = {}

      if (error.code === "23505") {
        if (error.detail.includes("slug")) errors.slug = "Slug already exists."
        if (error.detail.includes("title")) errors.title = "Title already exists."

        throw new BadRequestException(errors)
      }
    }
  }

  async findMany({ limit, published }: { limit?: number; latest?: boolean; published?: boolean }) {
    return await this.postsRepository.find({
      relations: ["author", "category"],
      take: limit,
      where: { published },
    })
  }

  async findAllCategories() {
    return await this.categoriesRepository.find()
  }
}
