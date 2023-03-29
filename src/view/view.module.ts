import { Module } from '@nestjs/common';
import { ViewService } from './service/view.service';
import { ViewController } from './controller/view.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { View } from 'src/entities/view.entity';
import { Video } from 'src/entities/video.entity';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([View,Video])
    ],
  providers: [ViewService],
  controllers: [ViewController]
})
export class ViewModule {}
