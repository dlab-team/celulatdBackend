import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Video } from 'src/entities/video.entity';
import { View } from 'src/entities/view.entity';
import { VideoController } from './controllers/video.controller';
import { VideoService } from './services/video.service';

@Module({
  imports: [TypeOrmModule.forFeature([Video, User, View])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class AdminModule {}
