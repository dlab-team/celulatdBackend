import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';


@Controller('api/registro')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}


  @Post()
  create(@Body() body: any) {
    return this.usuarioService.create(body);
  }
}
