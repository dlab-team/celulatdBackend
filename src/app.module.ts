import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { VideoModule } from './video/video.module';
import { NotificationModule } from './notification/notification.module';
import { FavoriteModule } from './favorite/favorite.module';
import { TrashModule } from './trash/trash.module';
import { ViewModule } from './view/view.module';
import { CountClickModule } from './count-click/count-click.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,      
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    VideoModule,
    FavoriteModule,
    NotificationModule,
    TrashModule,
    ViewModule,
    CountClickModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
