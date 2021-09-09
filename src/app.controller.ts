import {
  Controller,
  Logger,
  Post,
  Body,
  Inject,
  Get,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './createUser.dto';
import { RetrieveUserDTO } from './retrieve-user.dto';

@Controller()
export class AppController {
  public constructor(@Inject('client') private readonly client: ClientProxy) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }

  @Post('hello')
  async accumulate2(@Body('name') name: string) {
    return this.client.send<string, string>('hello', name);
  }

  @Post('createUser')
  async createUser(@Body('user') user: CreateUserDTO) {
    return this.client.send('createUser', user);
  }

  @Get('getUsers')
  async getUsers() {
    return this.client.send('getUsers', '');
  }

  @Get('retrieveUser/:lastname')
  public retrieveApplication(@Param() query: RetrieveUserDTO) {
    const lastname = query.lastname;
    return this.client.send('retrieveUser', { lastname });
  }
}
