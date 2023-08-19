import { Body, Controller, Get, Post, Query, Request, UseGuards } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import type { Request as RequestType } from "express"

import { JwtPayload } from "../auth/interfaces/jwt-payload.interface"
import { AuthJwtGuard } from "../auth/jwt.guard"
import { CreatePostDto } from "./dtos/create-post.dto"
import { PostsService } from "./posts.service"

@Controller("posts")
export class PostsController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly postsService: PostsService,
  ) {}

  @Post()
  @UseGuards(AuthJwtGuard)
  async create(@Request() req: RequestType, @Body() createPostDto: CreatePostDto) {
    console.log(req.user)
    
    await this.postsService.insert(createPostDto)
  }

  @Get()
  async readMany(@Request() req: RequestType, @Query("limit") limit: string) {
    const token = req.headers.authorization?.split(" ")[1] ?? ""
    let published = true

    try {
      await this.jwtService.verifyAsync<JwtPayload>(token)
      published = false
    } catch {}

    const posts = await this.postsService.findMany({
      limit: limit ? Number(limit) : undefined,
      published,
    })

    return posts
  }

  @Get("/categories")
  async readAllCategories() {
    const categories = await this.postsService.findAllCategories()

    return categories
  }
}
