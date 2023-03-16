import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Videos } from "./videos.entity";
import { VideoService } from "./video.service";


@Controller('api/video')
export class VideoController extends BaseController<Videos> {

    constructor(private readonly VideoService: VideoService) {
        super();
    }

    getService(): BaseService<Videos> {
        return this.VideoService;
    }

}