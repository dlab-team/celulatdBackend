
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
import { Notification } from './notification.entity';
import { Favorite } from './favorite.entity';
import { Video } from './video.entity';
import { Clickcount } from "./countclick.entity";
  
  @Entity()
  export class User {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    mail: string;
  
    @Column()
    password: string;
    @Column()
    foto: string;
  
    @OneToMany(() => Video, (video) => video.user)
    video: Video[];

  
    @OneToMany(() => Notification, (notification) => notification.user)
    notification: Notification[];
  
    @OneToMany(() => Favorite, (favoritte) => favoritte.user)
    favoritte: Favorite[];
    
    @OneToMany(() => Clickcount, (clickcount) => clickcount.user)
    clickcount: Clickcount[];

  
  }
  
   