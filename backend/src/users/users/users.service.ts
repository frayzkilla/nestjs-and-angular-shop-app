import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/database/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User
      ) {}
    
      async findAll(username: string, password: string): Promise<User> {
        return this.usersRepository.findOne({ where: { name: username,
                                                       password: password
         } });
      }
      /* async findOne(): Promise<User[]> {
        return this.usersRepository.findOne<User>();
      } */
}
