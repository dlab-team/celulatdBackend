import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { VideoModule } from './video/video.module';
import { FavoriteModule } from './favorite/favorite.module';
import { ViewModule } from './view/view.module';
import { ProvidersModule } from './providers/providers.module';
import { AdminModule } from './admin/admin.module';
import { DocumentsModule } from './documents/documents.module';



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
    AdminModule,
    VideoModule,
    FavoriteModule,
    ViewModule,
    ProvidersModule,
    DocumentsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
