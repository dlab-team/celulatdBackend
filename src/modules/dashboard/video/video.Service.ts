import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { video } from "./video.entity";

@Injectable()
export class videoService extends BaseService<video> {

    constructor(@InjectRepository(video) private videoRepository : Repository<video>) {
        super();
    }

    getRepository(): Repository<video> {
        return this.videoRepository;
    }

}