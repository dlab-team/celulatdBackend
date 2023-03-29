import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usr } from 'src/entities/user.entity';
import { Video } from 'src/entities/video.entity';
import { VideoController } from './controller/video.controller';
import { VideoService } from './service/video.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Video,Usr])
    ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
