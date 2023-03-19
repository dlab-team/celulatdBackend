import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
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
  createVideoId(@Param('id') id: number, @Body() videoDto: VideoDto) {
    console.log(videoDto);
    this.videoService.saveVideo(id, videoDto);
  }
  //eliminar video

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.videoService.delete(id);
  }

  //ver por id
  @Get('video/:id')
  getOne(@Param('id') id: number) {
    return this.videoService.findOne(id);
  }
  //ver todo
  @Get('video')
  getAll() {
    return this.videoService.findAll();
  }

  //actualizar por id
  @Put('video/:id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.videoService.update(id, body);
  }
}
