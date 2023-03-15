import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {adminModules} from "./admin/admin.module";
import {clickcountModules} from "./clickcount/clickcount.module";
import {favoriteModules} from "./favorites/favorite.module";
import {notificationModules} from "./notifications/notification.module";
import {VideoModules} from "./video/video.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
        adminModules,
        notificationModules,
        clickcountModules,
        favoriteModules,
        VideoModules,

    ],
    exports: [
        adminModules,
        clickcountModules,
        notificationModules,
        favoriteModules,
        VideoModules,
    ],
    controllers: [],
    providers: [],
})
export class DashboardModule {}
