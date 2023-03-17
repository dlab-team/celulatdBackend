import { Controller } from "@nestjs/common";
import { BaseController } from "src/modules/controller.commons";
import { BaseService } from "src/modules/service.commons";
import { Video } from "./video.entity";
import { VideoService } from "./video.service";


@Controller('api/video')
export class VideoController extends BaseController<Video> {

    constructor(private readonly VideoService: VideoService) {
        super();
    }

    getService(): BaseService<Video> {
        return this.VideoService;
    }

}