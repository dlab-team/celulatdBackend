import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Usr } from './user.entity';
import { Notification } from './notification.entity';


@Entity()
export class Trash {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number
  
  @ManyToOne(() => Usr, user => user.trash)
  user: Usr;

  @OneToOne(() => Notification)
  @JoinColumn({ name: 'notification' })
  notification: Notification;

}