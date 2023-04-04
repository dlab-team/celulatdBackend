import { Controller } from '@nestjs/common';
import { VideoService } from '../service/video.service';
import { BaseController } from 'src/commons/controller.commons';
import { Video } from 'src/entities/video.entity';
import { BaseService } from 'src/commons/service.commons';
 
  
  
@Controller('video')
export class VideoController extends BaseController<Video> {

    constructor(private readonly videoService: VideoService) {
        super();
    }

    getService(): BaseService<Video> {
        return this.videoService;
    }

}
  