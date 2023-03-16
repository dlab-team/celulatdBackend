
import { Usuario } from "src/modules/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Videos } from "../video/videos.entity";


@Entity()
export class Favorite {
 
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.favoritos)
  usuario: Usuario;

  @ManyToOne(() => Videos, videos => videos.favoritos)
  video: Videos;

  @Column()
  fecha_agregado: string;
}