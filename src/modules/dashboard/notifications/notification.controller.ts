import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";

import { NotificationService } from "./notification.service";


@Controller('api/notifications')
export class NotificationController extends BaseController<Notification> {

    constructor(private readonly notificationsService: NotificationService) {
        super();
    }

    getService(): BaseService<Notification> {
        return this.notificationsService;
    }

}