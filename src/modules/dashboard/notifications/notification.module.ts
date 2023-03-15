import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { notificationController } from './notification.controller';
import { notificationService } from './notification.service';
import { Notification } from './Notification.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Notification])],
    controllers: [notificationController],
    providers: [notificationService],
    exports: [notificationService],

})
export class notificationModules {}
