import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
export class CreateQuestionController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async handle() {
    return 'ok'
  }
}
