
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Video } from './video.entity';


@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id: number;
  
  @OneToOne(() => Video)
  @JoinColumn({ name: 'video_id' })
  video: Video;

  
  @Column({ type: 'timestamptz' }) 
  date_view: Date;
 
}
