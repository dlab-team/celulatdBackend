import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Favorite } from './favorites';

import { User } from 'src/auth/entities/user.entity';
import { View } from './view';


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

  @ManyToOne(() => User, user => user.video)
  user: User;

  @OneToMany(() => View, (view) => view.video)
  view: View[];

  @OneToMany(() => Favorite, (favorite) => favorite.video)
  favorite: Favorite[];
  
}

 
