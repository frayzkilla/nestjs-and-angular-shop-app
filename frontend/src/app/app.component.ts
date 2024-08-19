import { Component } from '@angular/core';
import { products as data } from './data/products';
import { IProduct } from './models/product';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  addVisible = false;

  term = ""

  title = 'frontend';

  configUrl: string = 'http://localhost:3000/products';
  //configUrl: string = 'https://fakestoreapi.com/products/2';

  products: IProduct[];

  constructor(private http: HttpClient){}

  getAll(): void {
    this.http.get(this.configUrl).subscribe({next:(res:any) => {
      this.products = res;
    }});
  }
       
    ngOnInit(){
           
        this.http.get(this.configUrl).subscribe({next:(res:any) => {
          this.products = res;
        }});
    }


  
  
}