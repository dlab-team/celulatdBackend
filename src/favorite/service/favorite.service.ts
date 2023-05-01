import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Favorite } from "src/entities/favorites";
import { Repository } from "typeorm";

@Injectable()
export class FavoriteService extends BaseService<Favorite> {

    constructor(@InjectRepository(Favorite) private favoriteRepository : Repository<Favorite>) {
        super();
    }

    getRepository(): Repository<Favorite> {
        return this.favoriteRepository;
    }
}