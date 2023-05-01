
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
 
  @Entity()
  export class Admin {
    [x: string]: any;
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 50 })
    usuario: string;
  
    @Column('varchar', { length: 50 })
    favorites: string;


  
  

  }
  
