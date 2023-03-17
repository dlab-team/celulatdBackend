import { Module } from '@nestjs/common';
import { AdminloginController } from './adminlogin.controller';
import { AdminloginService } from './adminlogin.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AdminloginController],
  providers: [AdminloginService],
  imports: [AuthModule]
})
export class AdminloginModule {}
