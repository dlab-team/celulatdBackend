import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { CountClickModule } from './count-click/count-click.module';
import { FavoriteModule } from './favorite/favorite.module';
import { NotificationModule } from './notification/notification.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { ViewModule } from './view/view.module';
import { TrashModule } from './trash/trash.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jona',
      password: '1234',
      database: 'testx',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    AdminModule,
    VideoModule,
    CountClickModule,
    ViewModule,
    UserModule,
    NotificationModule,
    FavoriteModule,
    TrashModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
