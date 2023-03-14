import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { view } from "./view.entity";

@Injectable()
export class viewService extends BaseService<view> {

    constructor(@InjectRepository(view) private viewRepository : Repository<view>) {
        super();
    }

    getRepository(): Repository<view> {
        return this.viewRepository;
    }

}