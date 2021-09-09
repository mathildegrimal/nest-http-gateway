import { Module } from '@nestjs/common';
import { MESSAGE_BROKER_HOST, MESSAGE_BROKER_PORT } from './config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'client',
        transport: Transport.NATS,
        options: {
          servers: [`nats://${MESSAGE_BROKER_HOST}:${MESSAGE_BROKER_PORT}`],
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
