import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';


import { Videos } from './videos.entity';

@Entity()
export class Vistas {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'ussuario_id' })
  usuario: Usuario;
  
  @OneToOne(() => Videos)
  @JoinColumn({ name: 'videos_id' })
  videos: Videos;

  @Column()
  fecha_vista: string;


}
