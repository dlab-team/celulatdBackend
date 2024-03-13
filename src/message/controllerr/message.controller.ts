import { Controller } from "@nestjs/common";
import { BaseController } from "../../commons/controller.commons";
import { BaseService } from "../../commons/service.commons";
import { MessageService } from "../service/message.service";
import { Message } from "../../entities/message.entity";

@Controller("message")
export class MessageController extends BaseController<Message> {
  constructor(private readonly messageService: MessageService) {
    super();
  }

  getService(): BaseService<Message> {
    return this.messageService;
  }
}
