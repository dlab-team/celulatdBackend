import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
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