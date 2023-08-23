import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import {MessagePattern, Payload} from '@nestjs/microservices'
import { CreateUserDTO } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name)

  @MessagePattern('find-all-users')
  async getAllUsers(): Promise<CreateUserDTO[]>{
    return this.appService.getUser()
  }

  @MessagePattern('create-user')
  async createUser(
    @Payload() data:any
  ): Promise<CreateUserDTO>{
    return this.appService.createUser(data)
  }
}
