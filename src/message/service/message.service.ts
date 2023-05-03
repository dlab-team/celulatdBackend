import { Injectable } from "@nestjs/common";
import { BaseService } from "../../commons/service.commons";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "../../entities/message.entity";

@Injectable()
export class MessageService extends BaseService<Message> {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>
  ) {
    super();
  }

  getRepository(): Repository<Message> {
    return this.messageRepository;
  }
}
