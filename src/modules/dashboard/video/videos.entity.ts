

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { View } from '../views/view.entity';
import { Usuario } from 'src/modules/user/user.entity';



@Entity()
export class Videos {

  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descripcion: string;
  
  @Column()
  duracion: number;

  @Column()
  fecha_publicacion: number;

  @Column()
  ruta_archivo: string;

  @ManyToOne(() => Usuario, usuario => usuario.videos)
  usuario: Usuario;

  @OneToOne(() => View)
  @JoinColumn({ name: 'vistas_id' })
  view: View;

  @OneToMany(() => View, (view) => view.usuario)
  vistas: View[];
  

}

 
