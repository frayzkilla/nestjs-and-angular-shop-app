import { Injectable } from '@nestjs/common';
import { products } from './data/products';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IProduct } from './models/product';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {



  getHello(): string {
    return 'Hello World!';
  }
}
