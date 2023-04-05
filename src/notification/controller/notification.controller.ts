import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { NotificationService } from "../service/notification.service";
import { BaseService } from "src/commons/service.commons";
import { Notification } from "../../entities/notification.entity"

  
@Controller('notification')
export class NotificationController extends BaseController<Notification> {

    constructor(private readonly notificationService: NotificationService) {
        super();
    }

    getService(): BaseService<Notification> {
        return this.notificationService;
    }

}