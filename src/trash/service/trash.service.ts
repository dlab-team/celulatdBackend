import { Injectable } from "@nestjs/common";
import {  InjectRepository } from "@nestjs/typeorm";
import { TrashDto } from "src/dto/trash.dto";
import { Trash } from "src/entities/trash.entity";
import { Repository } from "typeorm";

@Injectable()
export class TrashService {
    constructor(
        @InjectRepository(Trash)
        private trashRepository: Repository<Trash>,
    ) { }
   
  
    //busca todo

    async findAll(): Promise<Trash[]> {
        return this.trashRepository.find();
      }

    //busca de forma individual get por id 

    findOne(id: number) {
        return this.trashRepository.findOneBy({ id: id });
    }

    // actualiza por id(put)
    
    async update(id: number, body: TrashDto) {
        const trash = await this.trashRepository.findOneBy({ id: id });
        this.trashRepository.merge(trash, body);
        return this.trashRepository.save(trash)
    }

    // borra por id (delete)
    
    async delete(id: number) {
        await this.trashRepository.delete(id);
        return true;
    }
    //create post
    create(body: TrashDto) {
        const newTrash = this.trashRepository.create(body);
        
        return this.trashRepository.save(newTrash);
    }
    


}

