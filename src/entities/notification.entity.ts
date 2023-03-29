import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  message: string;

  @Column()
  read: boolean;

}