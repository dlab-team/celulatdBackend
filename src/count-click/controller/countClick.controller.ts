import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Clickcount } from "src/entities/countclick.entity";
import { CountClickService } from "../service/countClick.service";

  
@Controller('clickcount')
export class ClickCountController extends BaseController<Clickcount> {

    constructor(private readonly clickCountService: CountClickService) {
        super();
    }

    getService(): BaseService<Clickcount> {
        return this.clickCountService;
    }

}
  