import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingModule } from './modules/landing/landing.module';
import {DashboardModule} from "./modules/dashboard/dashboard.modules";
import {UserModule} from "./modules/user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'celulatd_database',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    
    }),DashboardModule,
    UserModule,
    LandingModule],
   controllers: [],
   providers: [],
})
export class AppModule {}
