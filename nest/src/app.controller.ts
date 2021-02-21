import { Controller, Post, Body } from '@nestjs/common'

import { AppService } from './app.service'

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getScramble(@Body() message: { str1: string, str2: string }): { message: boolean; } {
    return this.appService.getScramble(message.str1, message.str2)
  }
}
