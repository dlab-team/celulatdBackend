import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { clickcount } from "./clickcount.entity";
import { ClickcountService } from "./clickcount.service";


@Controller('api/clickcount')
export class ClickcountController extends BaseController<clickcount> {

    constructor(private readonly clickcountService: ClickcountService) {
        super();
    }

    getService(): BaseService<clickcount> {
        return this.clickcountService;
    }

}