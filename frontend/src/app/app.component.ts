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
  
  isAddVisible = false;
  isInfoVisible = false;
  isBuyVisible = false;
  isLoggingVisible = false;

  isAuthorized = false;
  username = null;
  role = null;
  temp_role = window.localStorage.getItem('role');
  

  logOut(): void{
    this.isAuthorized = false;
    this.username = null;
    this.role = null;
    window.localStorage.removeItem('role');
    window.localStorage.removeItem('username');
  }

  changeInfoVisibility(): void{
    console.log(this.isInfoVisible);
    this.isInfoVisible = false;
    console.log(this.isInfoVisible);
  }

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
      if (this.temp_role==null) {
        console.log(100);
      } else {
        this.role = window.localStorage.getItem('role');
        this.username = window.localStorage.getItem('username');
        this.isAuthorized = true;
      }  
        this.http.get(this.configUrl).subscribe({next:(res:any) => {
          this.products = res;
        }});
    }


  
  
}