import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { NotificationService } from "../service/notification.service";
import { BaseService } from "src/commons/service.commons";
<<<<<<< HEAD
import { Notification } from "../../entities/notification.entity"
=======
import { Notification } from "./../../entities/notification.entity"
>>>>>>> a0175965eed80aaf030b7b3243576bf6c3bd6916

  
@Controller('notification')
export class NotificationController extends BaseController<Notification> {

    constructor(private readonly notificationService: NotificationService) {
        super();
    }

    getService(): BaseService<Notification> {
        return this.notificationService;
    }

}