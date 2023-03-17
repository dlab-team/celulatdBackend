import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/modules/service.commons";
import { Repository } from "typeorm";
import { clickcount } from "./clickcount.entity";

@Injectable()
export class clickcountService extends BaseService<clickcount> {

    constructor(@InjectRepository(clickcount) private ClickcountRepository : Repository<clickcount>) {
        super();
    }

    getRepository(): Repository<clickcount> {
        return this.ClickcountRepository;
    }

}