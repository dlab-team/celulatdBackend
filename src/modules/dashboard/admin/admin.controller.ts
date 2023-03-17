import { Controller } from "@nestjs/common";
import { BaseController } from "src/modules/controller.commons";
import { BaseService } from "src/modules/service.commons";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";

@Controller('api/admin')
export class adminController extends BaseController<Admin> {

    constructor(private readonly adminService: AdminService) {
        super();
    }

    getService(): BaseService<Admin> {
        return this.adminService;
    }

}