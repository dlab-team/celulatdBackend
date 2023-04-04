import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Video } from "src/entities/video.entity";
import { Repository } from "typeorm";

@Injectable()
export class VideoService extends BaseService<Video> {

    constructor(@InjectRepository(Video) private videoRepository : Repository<Video>) {
        super();
    }

    getRepository(): Repository<Video> {
        return this.videoRepository;
    }
}
