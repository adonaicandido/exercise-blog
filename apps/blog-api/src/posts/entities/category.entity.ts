import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Post } from "./post.entity"

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Index("category_name_idx")
  @Column({ type: "text", unique: true })
  name: string

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[]
}
