import { Controller } from "@nestjs/common";
import { BaseController } from "src/modules/controller.commons";
import { BaseService } from "src/modules/service.commons";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('api/user')
export class UserController extends BaseController<User> {

    constructor(private readonly userService: UserService) {
        super();
    }

    getService(): BaseService<User> {
        return this.userService;
    }

}