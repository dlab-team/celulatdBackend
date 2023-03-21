import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Notification } from "./notification.entity";

@Entity()
export class Trash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  read: string;

  @Column()
  date_send: string;

  @OneToOne(() => Notification)
  @JoinColumn({ name: 'notification_id' })
  notification: Notification;

}