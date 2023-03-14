import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Admin } from "./admin.entity";

@Injectable()
export class AdminService extends BaseService<Admin> {

    constructor(@InjectRepository(Admin) private AdminRepository : Repository<Admin>) {
        super();
    }

    getRepository(): Repository<Admin> {
        return this.AdminRepository;
    }

}