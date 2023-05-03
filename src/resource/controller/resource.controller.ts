import { Controller } from "@nestjs/common";
import { BaseService } from "../../commons/service.commons";
import { Resource } from "../../entities/resourse.entity";
import { ResourceService } from "../service/resource.service";
import { BaseController } from "../../commons/controller.commons";
@Controller("resource")
export class ResourceController extends BaseController<Resource> {
  constructor(private readonly resourceService: ResourceService) {
    super();
  }

  getService(): BaseService<Resource> {
    return this.resourceService;
  }
}
