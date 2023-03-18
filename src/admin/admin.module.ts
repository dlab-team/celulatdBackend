import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



import { Video } from './entities/video.entity';
import { User } from 'src/registerUser/entities/user.entity';
import { View } from './entities/view.entity';
import { AdminController } from './controllers/admincontroller';
import { VideoService } from './services/video.service';

@Module({
  imports: [TypeOrmModule.forFeature([Video, User, View])],
  providers: [VideoService],
  controllers: [AdminController],
})
export class AdminModule {}
