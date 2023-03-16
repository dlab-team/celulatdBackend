import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
  } from 'typeorm';

import { Clickcount } from '../dashboard/clickcount/clickcount.entity';
import { Favorite } from '../dashboard/favorites/favorite.entity';
import { Videos } from '../dashboard/video/videos.entity';
import { View } from '../dashboard/views/view.entity';
import { Notification } from '../dashboard/notifications/notification.entity';

  
  
  
  
  
  @Entity()
  export class Usuario {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    correo: string;
  
    @Column()
    contrasena: string;
    @Column()
    foto: string;
  
    @OneToMany(() => Videos, videos => videos.usuario)
    videos: Videos[];
    
    @OneToMany(() => View, view => view.usuario)
    vistas: View[];
  
  
    @OneToMany(() => Notification, notification => notification.usuario)
    notification: Notification[];
  
    @OneToMany(() => Favorite, (favorite) => favorite.usuario)
    favoritos: Favorite[];
    
    @OneToMany(() => Clickcount, (clickcount) => clickcount.usuario)
    contador: Clickcount[];
  
  }
  
   