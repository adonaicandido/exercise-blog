import { Module } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        host: configService.getOrThrow("DATABASE_HOST"),
        port: configService.getOrThrow("DATABASE_PORT"),
        username: configService.getOrThrow("DATABASE_USER"),
        password: configService.getOrThrow("DATABASE_PASS"),
        database: configService.getOrThrow("DATABASE_NAME"),
        type: "postgres",
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
