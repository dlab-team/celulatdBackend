import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Vistas } from './vistas.entity';



@Entity()
export class Videos {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;
  @Column()
  descripcion: string;
  @Column()
  duracion: number;
  @Column()
  ruta_archivo: string;

  @ManyToOne(() => Usuario, usuario => usuario.videos)
  usuario: Usuario;

  @OneToOne(() => Vistas)
  @JoinColumn({ name: 'videos_id' })
  vistas: Vistas;

  

}

 
