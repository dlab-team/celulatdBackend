import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Video } from "./video.entity";

@Injectable()
export class VideoService extends BaseService<Video> {

    constructor(@InjectRepository(Video) private VideoRepository : Repository<Video>) {
        super();
    }

    getRepository(): Repository<Video> {
        return this.VideoRepository;
    }

}