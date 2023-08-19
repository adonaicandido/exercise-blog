import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { JwtModule } from "@nestjs/jwt"
import { Category } from "./entities/category.entity"
import { Post } from "./entities/post.entity"
import { PostsController } from "./posts.controller"
import { PostsService } from "./posts.service"

@Module({
  imports: [TypeOrmModule.forFeature([Category, Post]), JwtModule],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
