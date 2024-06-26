import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.serverice';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers:[MessagesService, MessagesRepository],
})
export class MessagesModule {}
