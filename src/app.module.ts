import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AdminloginModule } from './adminlogin/adminlogin.module';
import { RegisterAdminModule } from './registerAdmin/registerAdmin.module';
import { RegisterUserModule } from './registerUser/registerUser.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jona',
      password: '1234',
      database: 'ctd2',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    AdminModule,
    RegisterUserModule,
    AdminloginModule,
    RegisterAdminModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
