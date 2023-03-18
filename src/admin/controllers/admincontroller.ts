import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post
} from '@nestjs/common';

import { VideoDto } from 'src/dto/video.dto/video.dto';
import { VideoService } from "../services/video.service";


@Controller('admin')

export class AdminController {
  
  constructor(private videoService: VideoService) {}


  // @Post()
  // create(@Body() body: any) {
  //   return this.adminService.create(body);
  // }
  
  @Post('up-video')
@HttpCode(HttpStatus.NO_CONTENT)
createProduct(
  @Body() videoDto: VideoDto,
) {
  this.videoService.save(videoDto);
}
}
