import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Videos } from "./videos.entity";

@Injectable()
export class VideoService extends BaseService<Videos> {

    constructor(@InjectRepository(Videos) private VideoRepository : Repository<Videos>) {
        super();
    }

    getRepository(): Repository<Videos> {
        return this.VideoRepository;
    }

}