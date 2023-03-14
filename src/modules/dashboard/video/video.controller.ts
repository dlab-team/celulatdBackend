import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { video } from "./video.entity";
import { videoService } from "./video.Service";


@Controller('api/video')
export class videoController extends BaseController<video> {

    constructor(private readonly videoService: videoService) {
        super();
    }

    getService(): BaseService<video> {
        return this.videoService;
    }

}