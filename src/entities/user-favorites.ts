
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
    @PrimaryGeneratedColumn()
    id: number
  
    @ManyToOne(
      () => User, 
      user => user.id)
      user: User;
  
    @OneToMany(
      () =>  Favorite, 
      ( favorite) =>  favorite.id)
      favorite:  Favorite[];

      

  
  }
  
