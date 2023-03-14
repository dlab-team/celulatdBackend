import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { notifications } from "./notification.entity";
import { notificationService } from "./notification.service";


@Controller('api/notifications')
export class notificationsController extends BaseController<notifications> {

    constructor(private readonly notificationsService: notificationService) {
        super();
    }

    getService(): BaseService<notifications> {
        return this.notificationsService;
    }

}