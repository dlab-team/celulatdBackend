import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Favorite } from './favorite.entity';
import { Usr } from './user.entity';
import { View } from './view.entity';





@Entity()
export class Video {
  [x: string]: any;
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  title: string;

  @Column('text')
  description: string;

  @Column('float')
  duration: number;
  
  @Column('varchar', { length: 200 })
  route_archive: string;

  @Column({ type: 'timestamptz', nullable: true })
  date_publication: Date;

  @ManyToOne(() => Usr, user => user.video)
  user: Usr;

  @OneToMany(() => View, (view) => view.video)
  view: View[];

  @OneToMany(() => Favorite, (favorite) => favorite.video)
  favorite: Favorite[];
  
}

 
