import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";


@Entity()
export class Notificaciones {

  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Usuario, usuario => usuario.notificaciones)
  usuario: Usuario;
  @Column()
  mensaje: string;
  @Column()
  leido: boolean;
  @Column()
  fecha_envio: string;


}