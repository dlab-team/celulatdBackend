import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clickcount } from 'src/entities/countclick.entity';
import { Favorite } from 'src/entities/favorite.entity';
import { Usr } from 'src/entities/user.entity';
import { Video } from 'src/entities/video.entity';
import { View } from 'src/entities/view.entity';
import { Notification } from 'src/entities/notification.entity';
import { VideoController } from './controllers/video.controller';
import { VideoService } from './services/video.service';
import { NotificationService } from './services/notification.service';
import { FavoriteService } from './services/favorite.service';
import { CountClickService } from './services/countClick.service';
import { ViewService } from './services/view.service';
import { UserService } from './services/user.services';
import { UserController } from './controllers/user.controller';
import { CountClickController } from './controllers/countclick.controller';
import { FavoriteController } from './controllers/favorite.controller';
import { NotificationController } from './controllers/notification.controller';
import { Admin } from 'src/entities/admin.entity';
import { Trash } from 'src/entities/trash.entity';
import { ViewController } from './controllers/view.controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Video, Usr, View, Clickcount, Favorite, Notification, Trash])],
  providers: [VideoService, UserService, ViewService, CountClickService, FavoriteService, NotificationService],
  controllers: [VideoController, UserController, CountClickController, FavoriteController, NotificationController, ViewController],
})
export class AdminModule {}
