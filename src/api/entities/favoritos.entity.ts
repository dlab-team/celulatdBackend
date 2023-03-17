import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Videos } from "./videos.entity";


@Entity()
export class Favoritos {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.favoritos)
  usuario: Usuario;

  @Column()
  fecha_agregado: string;

  @ManyToOne(() => Videos, videos => videos.favoritos)
  videos: Videos;
}