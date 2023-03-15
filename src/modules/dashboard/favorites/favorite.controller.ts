import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Favorite } from "./favorite.entity";
import { favoriteService } from "./favorite.service";


@Controller('api/favorites')
export class favoriteController extends BaseController<Favorite> {

    constructor(private readonly favoritesService: favoriteService) {
        super();
    }

    getService(): BaseService<Favorite> {
        return this.favoritesService;
    }

}