import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/dto/admin.dto';
import { Admin } from 'src/entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterAdminService {
    constructor(
        @InjectRepository(Admin) 
        private RegisterRepository: Repository<Admin> 
    ) {}
    
    //find all get 
    findAll(){
        this.RegisterRepository.find();
    }
    // get for id 
    findOne(id: number): Promise<Admin> {
        return this.RegisterRepository.findOneBy({id:id});
    }
    //create post
    create(body: AdminDto) {
        const newAdmin = this.RegisterRepository.create(body);
        
        return this.RegisterRepository.save(newAdmin);
    }
    //actualiza por id(put)
    async update(id: number, body: AdminDto){
        const Register = await this.RegisterRepository.findOneBy({id:id});
        this.RegisterRepository.merge(Register, body);
        return this.RegisterRepository.save(Register)
    }
    //borra por id (delete)
    async delete(id: number) {
        await this.RegisterRepository.delete(id);
        return true;
    }
}
