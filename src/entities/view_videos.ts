import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany
  } from 'typeorm';
  import { Favorite } from './favorite.entity';
  import { View } from './view.entity';
  import { User } from 'src/auth/entities/user.entity';
  
  
  @Entity()
  export class ViewVideo {
    [x: string]: any;
   
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    title: string;
    
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
  