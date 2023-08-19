import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

import { Post } from "../posts/entities/post.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "text" })
  name: string
  @Column({ type: "text" })
  pictureUrl: string
  @Column({ type: "text", unique: true })
  username: string
  @Column({ type: "text" })
  password_hash: string

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[]
}
