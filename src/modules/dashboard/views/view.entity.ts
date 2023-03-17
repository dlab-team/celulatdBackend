
import { Usuario } from 'src/modules/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn } from 'typeorm';
import { Videos } from '../video/videos.entity';





@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
  
  @OneToOne(() => Videos)
  @JoinColumn({ name: 'videos_id' })
  videos: Videos;

  @Column()
  fecha_vista: string;


}
