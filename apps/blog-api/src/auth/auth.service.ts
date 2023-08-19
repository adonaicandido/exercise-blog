import { BadRequestException, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

import { UsersService } from "../users/users.service"
import { CredentialsDto } from "./dtos/credentials.dto"
import { JwtPayload } from "./interfaces/jwt-payload.interface"

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async authenticate({ username, password }: CredentialsDto) {
    const user = await this.usersService.findOneByUsername(username)

    if (!user) throw new BadRequestException({ root: "Invalid credentials" })
    if (!this.usersService.compareHash(password, user.password_hash))
      throw new BadRequestException({ root: "Invalid credentials" })

    const payload: JwtPayload = { sub: user.id, name: user.name, url: user.pictureUrl }

    return this.jwtService.sign(payload)
  }
}
