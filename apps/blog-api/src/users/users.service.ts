import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import * as bcrypt from "bcrypt"
import { Repository } from "typeorm"

import { User } from "./user.entity"

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async findOneByUsername(username: string) {
    const user = await this.usersRepository.findOne({ where: { username } })

    if (!user) return null

    return user
  }

  async findOneById(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } })

    if (!user) return null

    return user
  }

  async compareHash(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }
}
