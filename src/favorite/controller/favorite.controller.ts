import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { Favorite } from "src/entities/favorite.entity";
import { BaseService } from "src/commons/service.commons";
import { FavoriteService } from "../service/favorite.service";

  
@Controller('favorite')
export class FavoriteController extends BaseController<Favorite> {

    constructor(private readonly favoriteService: FavoriteService) {
        super();
    }

    getService(): BaseService<Favorite> {
        return this.favoriteService;
    }

}