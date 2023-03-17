import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Videos } from '../entities/videos.entity';


@Injectable()
export class VistasService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepo: Repository<Usuario>,
    @InjectRepository(Videos) private videosRepo: Repository<Videos>,
  ) {}

  findAll() {
    return this.usuariosRepo.find({
      relations: ['videos', 'vistas'],
    });
  }

}