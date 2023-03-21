import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClickDto } from 'src/dto/click.dto';
import { Clickcount } from 'src/entities/countclick.entity';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';



@Injectable()
export class CountClickService {
  [x: string]: any;
     constructor(

    @InjectRepository(Clickcount)
    private clickRepository: Repository<Clickcount>,

    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) { }

  async saveClickId(id: number, body: ClickDto) {
    const videoId = await this.videoRepository.findOneBy({id:id});
    if (videoId ) {
      const click = this.clickRepository.create(body);
      click.video = videoId;
      await this.clickRepository.save(click);
      return click
    }
    throw new NotFoundException(`No encontramos el el click asociado ${id}`)
  }
  //crea el post
  create(body: ClickDto) {
    const newVideo = this.clickRepository.create(body);
    
    return this.videoRepository.save(newVideo);
}

  // borra por id (delete)
   async delete(id: number) {
         await this.clickRepository.delete(id);
         return true;
   }
    //busca de forma individual get por id 
     findOne(id: number) {
         return this.clickRepository.findOneBy({id:id});
     }
     
    // actualiza por id(put)
     async update(id: number, body: ClickDto){
         const click = await this.clickRepository.findOneBy({id:id});
         this.clickRepository.merge(click, body);
         return this.clickRepository.save(click)
     }

}
