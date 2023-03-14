import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { notifications } from "./notification.entity";

@Injectable()
export class notificationService extends BaseService<notifications> {

    constructor(@InjectRepository(notifications) private notificationsRepository : Repository<notifications>) {
        super();
    }

    getRepository(): Repository<notifications> {
        return this.notificationsRepository;
    }

}