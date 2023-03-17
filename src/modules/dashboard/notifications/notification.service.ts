import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/modules/service.commons";
import { Repository } from "typeorm";
import { Notification } from "./notification.entity";

@Injectable()
export class notificationService extends BaseService<Notification> {

    constructor(@InjectRepository(Notification) private notificationsRepository : Repository<Notification>) {
        super();
    }

    getRepository(): Repository<Notification> {
        return this.notificationsRepository;
    }
}