
import { User } from 'src/auth/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
  } from 'typeorm';
 
  @Entity()
  export class UserFavorites {
    [x: string]: any;
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    usuario: string;
  
    @Column('varchar', { length: 50 })
    favorites: string;

    @ManyToOne(
      () => User, 
      user => user.id)
      user: User;
  
  }
  
