import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common';

import { VideoDto } from 'src/dto/video.dto/video.dto';
import { VideoService } from "../services/video.service";


@Controller('admin')

export class AdminController {
  
  constructor(private videoService: VideoService) {}

// post para crear Video 

   @Post('up-video')
   create(@Body() body: any) {
     return this.videoService.create(body);
   }
   
  // post para crear Video por id

  @Post('up-video/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  createVideoId(
  @Param('id') id: number,
  @Body() videoDto: VideoDto,
   ) {
    console.log(videoDto)
    this.videoService.saveVideo(id,videoDto);
  }

  //eliminar video
  

}
