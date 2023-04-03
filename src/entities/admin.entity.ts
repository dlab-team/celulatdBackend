import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 50 })
  email: string;

  @Column('varchar', { length: 12 })
  phone: string;

  @Column('varchar', { length: 10 })
  password: string;
  
  @Column('varchar', { length: 300})
  photo: string;
}