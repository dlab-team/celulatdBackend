import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, user => user.notification)
  user: User;
  @Column()
  message: string;
  @Column()
  read: boolean;
  @Column()
  date_send: string;


}