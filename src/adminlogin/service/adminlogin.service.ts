import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/dto/admin.dto';
import { Admin } from 'src/entities/admin.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AdminLoginService {
    constructor(
        @InjectRepository(Admin) 
        private adminLoginRepository: Repository<Admin> 
    ) {}
    
    //find all get 

    findAll(){
        this.adminLoginRepository.find();
    }

    // get for id 

    findOne(id: number): Promise<Admin> {
        return this.adminLoginRepository.findOneBy({id:id});
    }
    
    //create post

    create(body: AdminDto) {
        const newAdmin = this.adminLoginRepository.create(body);
        
        return this.adminLoginRepository.save(newAdmin);
    }

    //actualiza por id(put)

    async update(id: number, body: AdminDto){
        const Register = await this.adminLoginRepository.findOneBy({id:id});
        this.adminLoginRepository.merge(Register, body);
        return this.adminLoginRepository.save(Register)
    }

    //borra por id (delete)

    async delete(id: number) {
        await this.adminLoginRepository.delete(id);
        return true;
    }

}
