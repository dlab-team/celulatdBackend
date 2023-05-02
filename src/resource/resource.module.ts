import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Resource } from "../entities/resourse.entity";
import { ResourceService } from "./resource.service";
import { ResourceController } from "./resource.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
