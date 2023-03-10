import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Landing } from '../entities/landing.entity';




@Injectable()
export class LandingService {
    constructor(
        @InjectRepository(Landing) 
        private landingRepo: Repository<Landing> 
    ) {}
    
    //busca todo get 
    findAll(){
        this.landingRepo.find();
    }
    //busca de forma individual get por id 
    findOne(id: number): Promise<Landing> {
        return this.landingRepo.findOneBy({id:id});
    }
    //crea el post
    create(body: any) {
        const newTask = this.landingRepo.create(body);
        
        return this.landingRepo.save(newTask);
    }
    //actualiza por id(put)
    async update(id: number, body: any){
        const landing = await this.landingRepo.findOneBy({id:id});
        this.landingRepo.merge(landing, body);
        return this.landingRepo.save(landing)
    }
    //borra por id (delete)
    async delete(id: number) {
        await this.landingRepo.delete(id);
        return true;
    }
}
