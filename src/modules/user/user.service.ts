import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/modules/service.commons";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService extends BaseService<User> {

    constructor(@InjectRepository(User) private UserRepository : Repository<User>) {
        super();
    }

    getRepository(): Repository<User> {
        return this.UserRepository;
    }

}