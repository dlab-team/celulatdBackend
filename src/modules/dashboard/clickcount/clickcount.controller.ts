import { Controller } from "@nestjs/common";
import { BaseController } from "src/modules/controller.commons";
import { BaseService } from "src/modules/service.commons";
import { clickcount } from "./clickcount.entity";
import { clickcountService } from "./clickcount.service";


@Controller('api/clickcount')
export class clickcountController extends BaseController<clickcount> {

    constructor(private readonly clickcountService: clickcountService) {
        super();
    }

    getService(): BaseService<clickcount> {
        return this.clickcountService;
    }

}