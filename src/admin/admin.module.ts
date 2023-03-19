import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Video } from 'src/entities/video.entity';
import { View } from 'src/entities/view.entity';
import { AdminController } from './controllers/admincontroller';
import { VideoService } from './services/video.service';

@Module({
  imports: [TypeOrmModule.forFeature([Video, User, View])],
  providers: [VideoService],
  controllers: [AdminController],
})
export class AdminModule {}
