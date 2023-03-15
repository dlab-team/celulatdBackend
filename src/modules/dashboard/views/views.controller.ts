import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { View } from "./view.entity";
import { ViewService } from "./view.service";


@Controller('api/view')
export class ViewController extends BaseController<View> {

    constructor(private readonly ViewService: ViewService) {
        super();
    }

    getService(): BaseService<View> {
        return this.ViewService;
    }

}