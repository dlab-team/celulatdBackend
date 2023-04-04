import { View } from "src/entities/view.entity";
import { ViewService } from "../service/view.service";
import { BaseController } from "src/commons/controller.commons";
import { Controller } from "@nestjs/common";
import { BaseService } from "src/commons/service.commons";

@Controller('view')
export class FavoriteController extends BaseController<View> {

    constructor(private readonly viewService: ViewService) {
        super();
    }

    getService(): BaseService<View> {
        return this.viewService;
    }

}
