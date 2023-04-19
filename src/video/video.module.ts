import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from 'src/entities/video.entity';
import { VideoController } from './controller/video.controller';
import { VideoService } from './service/video.service';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Video,User])
    ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
