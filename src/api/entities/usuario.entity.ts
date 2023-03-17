import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Clickcount } from './contadorclick.entity';

import { Favoritos } from './favoritos.entity';
import { Notificaciones } from './notificaciones.entity';
import { Videos } from './videos.entity';
import { Vistas } from './vistas.entity';




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

  @OneToMany(() => Videos, (videos) => videos.usuario)
  videos: Videos[];
  
  @OneToMany(() => Vistas, (vistas) => vistas.usuario)
  vistas: Vistas[];


  @OneToMany(() => Notificaciones, (notificaciones) => notificaciones.usuario)
  notificaciones: Notificaciones[];

  @OneToMany(() => Favoritos, (favoritos) => favoritos.usuario)
  favoritos: Favoritos[];
  
  @OneToMany(() => Clickcount, (clickcount) => clickcount.usuario)
  contador: Clickcount[];

}

 