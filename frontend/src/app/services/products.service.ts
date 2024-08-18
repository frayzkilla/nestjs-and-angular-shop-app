import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {IProduct} from '../models/product'

@Injectable({
    providedIn: 'root'
  })
export class ProductsService {
    constructor(private http: HttpClient){}

  products: IProduct[] = [];
  configUrl: string = 'http://localhost:3000/products';

  getAll(): void {
    this.http.get(this.configUrl).subscribe({next:(res:any) => {
        this.products = res.data;
      }});
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(prod => this.products.push(prod))
      )
  }

}