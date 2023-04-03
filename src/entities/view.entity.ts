
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Usr } from './user.entity';
import { Video } from './video.entity';


@Entity()
export class View {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;
  

  // @ManyToOne(() => Usr, user => user.view)
  // user: Usr;

  @ManyToOne(() => Video, video => video.view)
  video: Video;

  @Column({ type: 'timestamptz', nullable: true })
  date_view: Date;
}
