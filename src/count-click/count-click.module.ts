import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clickcount } from 'src/entities/countclick.entity';
import { Video } from 'src/entities/video.entity';
import { CountClickController } from './controller/countClick.controller';
import { CountClickService } from './service/countClick.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Clickcount, Video])
    ],
  controllers: [CountClickController],
  providers: [CountClickService]
})
export class CountClickModule {}
