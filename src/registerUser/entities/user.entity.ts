
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';

import { Clickcount } from 'src/admin/entities/countclick.entity';
import { Favorite } from 'src/admin/entities/favorite.entity';
import { Video } from 'src/admin/entities/video.entity';
import { Notification } from "src/admin/entities/notification.entity";
  
  
  
  
  
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
  
   