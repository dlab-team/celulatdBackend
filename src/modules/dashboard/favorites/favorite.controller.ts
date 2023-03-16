import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Favorite } from "./favorite.entity";

import { FavoriteService } from "./favorite.service";


@Controller('api/favorites')
export class FavoriteController extends BaseController<Favorite> {

    constructor(private readonly favoritesService: FavoriteService) {
        super();
    }

    getService(): BaseService<Favorite> {
        return this.favoritesService;
    }

}