import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Clickcount } from "./clickcount.entity";
import { ClickcountService } from "./clickcount.service";





@Controller('api/clickcount')
export class ClickcountController extends BaseController<Clickcount> {

    constructor(private readonly clickcountService: ClickcountService) {
        super();
    }

    getService(): BaseService<Clickcount> {
        return this.clickcountService;
    }

}