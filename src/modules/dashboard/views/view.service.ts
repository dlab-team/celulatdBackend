import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/modules/service.commons";
import { Repository } from "typeorm";
import { View } from "./View.entity";

@Injectable()
export class ViewService extends BaseService<View> {

    constructor(@InjectRepository(View) private ViewRepository : Repository<View>) {
        super();
    }

    getRepository(): Repository<View> {
        return this.ViewRepository;
    }

}