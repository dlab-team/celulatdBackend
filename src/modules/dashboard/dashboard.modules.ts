import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {adminModules} from "./admin/admin.module";
import {clickcountModules} from "./clickcount/clickcount.module";

import {notificationModules} from "./notifications/notification.module";
import {VideoModules} from "./video/video.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
        adminModules,
        notificationModules,
        clickcountModules,
        VideoModules,

    ],
    exports: [
        adminModules,
        clickcountModules,
        notificationModules,
        VideoModules,
    ],
    controllers: [],
    providers: [],
})
export class DashboardModule {}
