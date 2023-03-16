import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Favorite } from "./favorite.entity";


@Injectable()
export class FavoriteService extends BaseService<Favorite> {

    constructor(@InjectRepository(Favorite) private FavoriteRepository : Repository<Favorite>) {
        super();
    }

    getRepository(): Repository<Favorite> {
        return this.FavoriteRepository;
    }

}