
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class View {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column() 
  user_id: number;

  @Column() 
  video_id: number;
 
}
