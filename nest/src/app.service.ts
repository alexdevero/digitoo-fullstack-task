import { Injectable } from '@nestjs/common'

import { isScramble } from './is-scramble/is-scramble'

@Injectable()
export class AppService {
  getScramble(str1: string, str2: string): { message: boolean; } {
    return {
      message: isScramble(str1, str2)
    }
  }
}
