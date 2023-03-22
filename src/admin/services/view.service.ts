import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ViewDto } from 'src/dto/view.dto';
import { Video } from 'src/entities/video.entity';
import { View } from 'src/entities/view.entity';
import { Repository } from 'typeorm';



@Injectable()
export class ViewService {
  [x: string]: any;
     constructor(

    @InjectRepository(View)
    private viewRepository: Repository<View>,

    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) { }

  async saveViewId(id: number, body: ViewDto) {
    const videoId = await this.videoRepository.findOneBy({id:id});
    if (videoId ) {
      const view = this.viewkRepository.create(body);
      view.video = videoId;
      await this.viewRepository.save(view);
      return view
    }
    throw new NotFoundException(`No encontramos el el click asociado ${id}`)
  }

  //crea el post

  create(body: ViewDto) {
    const newView = this.viewRepository.create(body);
    return this.viewRepository.save(newView);
  }

  // borra por id (delete)

  async delete(id: number) {
    await this.viewRepository.delete(id);
    return true;
  }

  //busca de forma individual get por id 

  findOne(id: number) {
    return this.viewRepository.findOneBy({id:id});
  }

  //busca todo

  async findAll(): Promise<View[]> {
    return this.viewRepository.find();
  }

  
}
