import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/users/users.controller';
import { UsersService } from './users/users/users.service';
import { UsersModule } from './users/users/users.module';
import { usersProviders } from './users/users/users.providers';

@Module({
  imports: [HttpModule, DatabaseModule, UsersModule],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, ProductsService, UsersService,
    ...usersProviders],
})
export class AppModule {}
