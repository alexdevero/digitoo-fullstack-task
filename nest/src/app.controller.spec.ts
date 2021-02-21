import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()
  })

  describe('getScramble', () => {
    it('should return "false"', () => {
      const appController = app.get<AppController>(AppController)

      expect(appController.getScramble({ str1: 'foo', str2: 'bar' })).toStrictEqual({ message: false })
    })
  })
})
