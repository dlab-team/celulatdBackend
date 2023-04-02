
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity()
  export class Usr {


    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    phone: string;

    @Column()
    password: string;
    
    @Column()
    photo: string;
 
  }
  
   