import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoDto } from 'src/dto/video.dto/video.dto';
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

  async saveVideo(id: number, body: VideoDto) {
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
     create(body: any) {
        const newVideo = this.videoRepository.create(body);
        
        return this.videoRepository.save(newVideo);
    }
        // borra por id (delete)
     async delete(id: number) {
         await this.videoRepository.delete(id);
         return true;
     }

    // constructor(
    //     @InjectRepository(Admin) 
    //     private AdminRepo: Repository<Admin> 
    // ) {}
    
    // //busca todo get 
    // findAll(){
    //     this.AdminRepo.find();
    // }
    // //busca de forma individual get por id 
    // findOne(id: number): Promise<Admin> {
    //     return this.AdminRepo.findOneBy({id:id});
    // }
    // 
    // //actualiza por id(put)
    // async update(id: number, body: any){
    //     const Admin = await this.AdminRepo.findOneBy({id:id});
    //     this.AdminRepo.merge(Admin, body);
    //     return this.AdminRepo.save(Admin)
    // }

}
