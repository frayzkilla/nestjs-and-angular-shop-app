import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { IProduct } from 'src/models/product';

@Injectable()
export class ProductsService {
    
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<IProduct[]>> {
    return this.httpService.get('https://fakestoreapi.com/products');
  }

  addItem(product: IProduct): void {
    this.httpService.post('https://fakestoreapi.com/products', product);
  }
}
