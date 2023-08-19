import { Injectable, UnauthorizedException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

import { UsersService } from "src/users/users.service"
import { JwtPayload } from "./interfaces/jwt-payload.interface"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersServices: UsersService,
  ) {
    super({
      secretOrKey: configService.getOrThrow("JWT_SECRET"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    })
  }

  async validate({ sub }: JwtPayload) {
    const user = await this.usersServices.findOneById(sub)

    if (!user) throw new UnauthorizedException()

    return user
  }
}
