import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usr } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Notification } from 'src/entities/notification.entity';
import { NotificationDto } from 'src/dto/notification.dto';

@Injectable()
export class NotificationService {
  
     constructor(

    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,

    @InjectRepository(Usr)
    private userRepository: Repository<Usr>,
  ) { }

  async saveNotificationId(id: number, body: NotificationDto) {
    const user = await this.userRepository.findOneBy({id:id});
    if (user ) {
      const notification = this.notificationRepository.create(body);
      notification.user = user;
      await this.notificationRepository.save(notification);
      return notification
    }
    throw new NotFoundException(`No encontramos el el click asociado ${id}`)
  }

  // borra por id (delete)

  async delete(id: number) {
    await this.notificationRepository.delete(id);
    return true;
  }

  //busca de forma individual get por id 

  findOne(id: number) {
    return this.notificationRepository.findOneBy({id:id});
  }

  //busca todo
  async findAll(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }
     
  // actualiza por id(put)

  async update(id: number, body: NotificationDto){
    const notification = await this.notificationRepository.findOneBy({id:id});
    this.notificationRepository.merge(notification, body);
    return this.notificationRepository.save(notification)
  }

}
