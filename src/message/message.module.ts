import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "./controllerr/message.controller";
import { Message } from "../entities/message.entity";
import { MessageService } from "./service/message.service";
@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
