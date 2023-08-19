import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

import { User } from "../../users/user.entity"
import { Category } from "./category.entity"

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Index("post_title_idx")
  @Column({ type: "text", unique: true })
  title: string
  @ManyToOne(() => Category, (category) => category.posts)
  category: Category
  @Column({ type: "text" })
  excerpt: string

  @Index("post_slug_idx")
  @Column({ type: "text", nullable: true, unique: true })
  slug: string
  @Column({ type: "text", nullable: true })
  thumbnailUrl: string

  @Column({ default: false })
  published: boolean

  @Column({ default: () => "CURRENT_TIMESTAMP", type: "timestamptz", update: false })
  createdAt: Date
  @Column({ default: () => "CURRENT_TIMESTAMP", type: "timestamptz" })
  updatedAt: Date
  @Column({ type: "timestamptz", nullable: true })
  publishedAt: Date | null

  @ManyToOne(() => User, (user) => user.posts)
  author: User
}
