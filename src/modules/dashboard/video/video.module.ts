import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { Videos } from './videos.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Videos])],
    controllers: [VideoController],
    providers: [VideoService],
    exports: [VideoService],
})
export class VideoModules {}
