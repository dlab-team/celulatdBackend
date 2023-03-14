import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";

@Controller('api/admin')
export class AdminController extends BaseController<Admin> {

    constructor(private readonly adminService: AdminService) {
        super();
    }

    getService(): BaseService<Admin> {
        return this.adminService;
    }

}