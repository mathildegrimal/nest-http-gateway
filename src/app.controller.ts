import {
  Controller,
  Logger,
  Post,
  Body,
  Inject,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/createUser.dto copy';
import { RetrieveUserDTO } from './dto/retrieve-user.dto';

@Controller('user')
export class AppController {
  public constructor(@Inject('client') private readonly client: ClientProxy) {}

  @Post()
  public createUser(@Body('user') user: CreateUserDTO) {
    return this.client.send('createUser', user);
  }

  @Get()
  public getUsers() {
    return this.client.send('getUsers', '');
  }

  @Get(':lastname')
  public retrieveApplication(@Param() query: RetrieveUserDTO) {
    const lastname = query.lastname;
    return this.client.send('retrieveUser', { lastname });
  }

  @Patch('update/:id')
  public updateUser(@Param('id') id: number, @Body() infos: UpdateUserDTO) {
    console.log(id);
    const { firstname, lastname } = infos;
    return this.client.send('updateUser', { id, firstname, lastname });
  }

  @Delete('delete/:id')
  public deleteUser(@Param() id: number) {
    const userId = id;
    return this.client.send('deleteUser', userId);
  }
}
