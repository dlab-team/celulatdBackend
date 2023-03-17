import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/modules/service.commons";
import { Repository } from "typeorm";
import { Clickcount } from "./clickcount.entity";



@Injectable()
export class ClickcountService extends BaseService<Clickcount> {

    constructor(@InjectRepository(Clickcount) private ClickcountRepository : Repository<Clickcount>) {
        super();
    }

    getRepository(): Repository<Clickcount> {
        return this.ClickcountRepository;
    }

}