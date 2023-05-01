
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Video } from './video.entity';


@Entity()
export class View {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;
  

  @ManyToOne(() => Video, video => video.view)
  video: Video;

  @ManyToOne(() =>  View, view => view.view)
  view:  View;

  @Column({ type: 'timestamptz', nullable: true })
  date_view: Date;
}