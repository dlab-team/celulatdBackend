import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/admin.entity';




@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Usuario) 
        private AdminRepo: Repository<Usuario> 
    ) {}
    
    //busca todo get 
    findAll(){
        this.AdminRepo.find();
    }
    //busca de forma individual get por id 
    findOne(id: number): Promise<Usuario> {
        return this.AdminRepo.findOneBy({id:id});
    }
    //crea el post
    create(body: any) {
        const newTask = this.AdminRepo.create(body);
        
        return this.AdminRepo.save(newTask);
    }
    //actualiza por id(put)
    async update(id: number, body: any){
        const Admin = await this.AdminRepo.findOneBy({id:id});
        this.AdminRepo.merge(Admin, body);
        return this.AdminRepo.save(Admin)
    }
    //borra por id (delete)
    async delete(id: number) {
        await this.AdminRepo.delete(id);
        return true;
    }
}
