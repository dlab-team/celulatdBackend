import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/registerUser.entity';





@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Usuario) 
        private RegisterRepo: Repository<Usuario> 
    ) {}
    
    //busca todo get 
    findAll(){
        this.RegisterRepo.find();
    }
    //busca de forma individual get por id 
    findOne(id: number): Promise<Usuario> {
        return this.RegisterRepo.findOneBy({id:id});
    }
    //crea el post
    create(body: any) {
        const newTask = this.RegisterRepo.create(body);
        
        return this.RegisterRepo.save(newTask);
    }
    //actualiza por id(put)
    async update(id: number, body: any){
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
