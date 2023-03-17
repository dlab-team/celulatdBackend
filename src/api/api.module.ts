import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Usuario } from './entities/usuario.entity';
import { Videos } from './entities/videos.entity';
import { Vistas } from './entities/vistas.entity';
import { VistasService } from './services/vistas.service';
import { UsuarioService } from './services/usuario.service';
import { VistasController } from './controllers/vistas.controller';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Videos, Usuario, Vistas])],
  providers: [UsuarioService, VistasService],
  controllers: [UsuarioController, VistasController],
})
export class ApiModule {}
