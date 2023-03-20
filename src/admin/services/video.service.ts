import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoDto } from 'src/dto/video.dto';
import { User } from 'src/entities/user.entity';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  [x: string]: any;
     constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) { }

  async saveVideoId(id: number, body: VideoDto) {
    const user = await this.userRepository.findOneBy({id:id});
    console.log(user, id);
    if (user) {
      const video = this.videoRepository.create(body);
      video.user = user;
      await this.videoRepository.save(video);
      return video
    }
    throw new NotFoundException(`No encontramos el usuario ${id}`)
  }
  //crea el post
     create(body: VideoDto) {
        const newVideo = this.videoRepository.create(body);
        
        return this.videoRepository.save(newVideo);
    }
       
  // borra por id (delete)
   async delete(id: number) {
         await this.videoRepository.delete(id);
         return true;
   }

  //busca todo
     findAll(){
         this.videoRepository.find();
     }

    //busca de forma individual get por id 
     findOne(id: number) {
         return this.videoRepository.findOneBy({id:id});
     }
     
    // actualiza por id(put)
     async update(id: number, body: VideoDto){
         const video = await this.videoRepository.findOneBy({id:id});
         this.videoRepository.merge(video, body);
         return this.videoRepository.save(video)
     }

}
