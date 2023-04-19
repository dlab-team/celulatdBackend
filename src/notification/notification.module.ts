import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/entities/notification.entity';
import { NotificationController } from './controller/notification.controller';
import { NotificationService } from './service/notification.service';
import { User } from 'src/auth/entities/user.entity';


@Module({
  imports: [
  
    TypeOrmModule.forFeature([Notification,User])
    ],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
