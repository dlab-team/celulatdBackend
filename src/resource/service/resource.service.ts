import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Resource } from "../../entities/resourse.entity";
import { Repository } from "typeorm";
import { BaseService } from "../../commons/service.commons";

@Injectable()
export class ResourceService extends BaseService<Resource> {
  constructor(
    @InjectRepository(Resource) private resourceRepository: Repository<Resource>
  ) {
    super();
  }

  getRepository(): Repository<Resource> {
    return this.resourceRepository;
  }
}
