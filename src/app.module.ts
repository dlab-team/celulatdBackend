import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { FavoriteModule } from "./favorite/favorite.module";
import { ProvidersModule } from "./providers/providers.module";
import { AdminModule } from "./admin/admin.module";
import { Resource } from "./entities/resourse.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
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
    FavoriteModule,
    ProvidersModule,
    Resource,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//TODO Agregar-resourse-message-userSatadist
