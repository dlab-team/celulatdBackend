import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteDto } from 'src/dto/favorite.dto';
import { Favorite } from 'src/entities/favorite.entity';
import { Usr } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteService {
  [x: string]: any;
     constructor(
    @InjectRepository(Usr)
    private userRepository: Repository<Usr>,
    
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
  ) { }

  //  async saveFavoriteId(id: number, body: FavoriteDto) {
  //    const user = await this.userRepository.findOneBy({id:id});
  //    console.log(user, id);
  //    if (user) {
  //      const favorite = this.favoriteRepository.create(body);
  //      favorite.user = user;
  //      await this.favoriteRepository.save(favorite);
  //      return favorite
  //    }
  //    throw new NotFoundException(`No encontramos el usuario ${id}`)
  //  }

  // borra por id (delete)

   async delete(id: number) {
      await this.favoriteRepository.delete(id);
      return true;
   }

  //busca todo

  async findAll(): Promise<Favorite[]> {
    return this.favoriteRepository.find();
  }

  //busca de forma individual get por id 

  findOne(id: number) {
    return this.favoriteRepository.findOneBy({id:id});
  }
}
