import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/entities/notification.entity';
import { Usr } from 'src/entities/user.entity';
import { NotificationController } from './controller/notification.controller';
import { NotificationService } from './service/notification.service';


@Module({
  imports: [
  
    TypeOrmModule.forFeature([Notification,Usr])
    ],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
