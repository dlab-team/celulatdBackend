
import { User } from 'src/auth/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany
  } from 'typeorm';
import { Favorite } from './favorites';
 
  @Entity()
  export class UserFavorites {
    [x: string]: any;
  

    @OneToMany(
      () =>  Favorite, 
      ( favorite) =>  favorite.user)
      Favorite:  Favorite[];

   
  

  
  }
  
