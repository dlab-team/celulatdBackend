import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';

import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(User) 
        private RegisterRepo: Repository<User> 
    ) {}
    
    //find all get 
    findAll(){
        this.RegisterRepo.find();
    }
    // get for id 
    findOne(id: number): Promise<User> {
        return this.RegisterRepo.findOneBy({id:id});
    }
    //create post
    create(body: UserDto) {
        const newUser = this.RegisterRepo.create(body);
        
        return this.RegisterRepo.save(newUser);
    }
    //actualiza por id(put)
    async update(id: number, body: UserDto){
        const Register = await this.RegisterRepo.findOneBy({id:id});
        this.RegisterRepo.merge(Register, body);
        return this.RegisterRepo.save(Register)
    }
    //borra por id (delete)
    async delete(id: number) {
        await this.RegisterRepo.delete(id);
        return true;
    }
}
