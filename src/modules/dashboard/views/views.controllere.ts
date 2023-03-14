import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { view } from "./view.entity";
import { viewService } from "./view.service";


@Controller('api/view')
export class viewController extends BaseController<view> {

    constructor(private readonly viewService: viewService) {
        super();
    }

    getService(): BaseService<view> {
        return this.viewService;
    }

}