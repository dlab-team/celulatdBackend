import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Notification } from "../../entities/notification.entity"

@Injectable()
export class NotificationService extends BaseService<Notification> {

    constructor(@InjectRepository(Notification) private notificationRepository : Repository<Notification>) {
        super();
    }

    getRepository(): Repository<Notification> {
        return this.notificationRepository;
    }
}