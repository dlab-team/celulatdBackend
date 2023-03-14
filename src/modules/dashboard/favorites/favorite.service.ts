import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { favorites } from "./favorite.entity";

@Injectable()
export class favoriteService extends BaseService<favorites> {

    constructor(@InjectRepository(favorites) private favoritesRepository : Repository<favorites>) {
        super();
    }

    getRepository(): Repository<favorites> {
        return this.favoritesRepository;
    }

}