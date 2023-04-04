import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { View } from "src/entities/view.entity";
import { Repository } from "typeorm";

@Injectable()
export class ViewService extends BaseService<View> {

    constructor(@InjectRepository(View) private viewRepository : Repository<View>) {
        super();
    }

    getRepository(): Repository<View> {
        return this.viewRepository;
    }
}