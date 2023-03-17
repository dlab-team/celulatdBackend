import { Controller, Get, Post, Body } from '@nestjs/common';

import { VistasService } from './../services/vistas.service';

@Controller('api/vistas')
export class VistasController {
  constructor(private vistasService: VistasService) {}

  @Get()
  findAll() {
    return this.vistasService.findAll();
  }


}
