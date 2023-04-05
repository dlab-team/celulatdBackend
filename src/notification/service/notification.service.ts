import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
<<<<<<< HEAD
import { Notification } from "../../entities/notification.entity"
=======
import { Notification } from "./../../entities/notification.entity"
>>>>>>> a0175965eed80aaf030b7b3243576bf6c3bd6916

@Injectable()
export class NotificationService extends BaseService<Notification> {

    constructor(@InjectRepository(Notification) private notificationRepository : Repository<Notification>) {
        super();
    }

    getRepository(): Repository<Notification> {
        return this.notificationRepository;
    }
}