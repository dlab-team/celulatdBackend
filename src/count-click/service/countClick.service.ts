import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Clickcount } from "src/entities/countclick.entity";
import { Repository } from "typeorm";


@Injectable()
export class CountClickService extends BaseService<Clickcount> {

    constructor(@InjectRepository(Clickcount) private clickCountRepository : Repository<Clickcount>) {
        super();
    }

    getRepository(): Repository<Clickcount> {
        return this.clickCountRepository;
    }
}

