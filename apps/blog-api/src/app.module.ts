import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { AuthModule } from "./auth/auth.module"
import { DatabaseModule } from "./database/database.module"
import { PostsModule } from "./posts/posts.module"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
