
import { Usuario } from "src/modules/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.notification)
  usuario: Usuario;

  @Column()
  mensaje: string;

  @Column()
  leido: boolean;
  
  @Column()
  fecha_envio: string;


}