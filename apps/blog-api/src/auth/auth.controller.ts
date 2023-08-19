import { Body, Controller, Post } from "@nestjs/common"

import { AuthService } from "./auth.service"
import { CredentialsDto } from "./dtos/credentials.dto"
import { JwtToken } from "./interfaces/jwt-token.interface"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Body() body: CredentialsDto): Promise<JwtToken> {
    const access_token = await this.authService.authenticate(body)

    return { access_token }
  }
}
