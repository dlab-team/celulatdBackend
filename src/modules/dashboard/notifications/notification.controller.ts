import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Notification } from "./notification.entity";
import { notificationService } from "./notification.service";


@Controller('api/notifications')
export class notificationController extends BaseController<Notification> {

    constructor(private readonly notificationsService: notificationService) {
        super();
    }

    getService(): BaseService<Notification> {
        return this.notificationsService;
    }

}