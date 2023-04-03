
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
import { Video } from './video.entity';
import { Notification } from "./notification.entity";
import { Clickcount } from './countclick.entity';
import { Trash } from './trash.entity';
import { Favorite } from './favorite.entity';
import { View } from './view.entity';

  
  @Entity()
  export class Usr {
    [x: string]: any;


    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    name: string;
  
    @Column('varchar', { length: 50 })
    email: string;
  
    @Column('varchar', { length: 12 })
    phone: string;

    @Column('varchar', { length: 10 })
    password: string;
    
    @Column('varchar', { length: 500 })
    photo: string;

    @OneToMany(() => Video, (video) => video.user)
    video: Video[];

    @OneToMany(() => Notification, (notification) => notification.user)
    notification: Notification[];
    
    @OneToMany(() => Clickcount, (clickcount) => clickcount.user)
    clickcount: Clickcount[];

    @OneToMany(() => Trash, (trash) => trash.user)
    trash: Trash[];

    @OneToMany(() => Favorite, (favorite) => favorite.user)
    favorite: Favorite[];

    @OneToMany(() => View, (view) => view.user)
    view: View[];

 
  }
  





 

  
  



