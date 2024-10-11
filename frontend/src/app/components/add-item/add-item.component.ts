import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../../models/product';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  body: IProduct;
  configUrl: string = 'http://localhost:3000/products';

  constructor(
    private appcom: AppComponent,
    private http: HttpClient
  ){}

  changeVisibility(): void{
    this.appcom.isAddVisible = false;
  }

  form = new FormGroup({
    title: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>('')
  })

  submit(): void{
    this.body = {
      id: 122,
      title: this.form.controls.title.value as string,
      price: this.form.controls.price.value as number,
      description: this.form.controls.description.value as string,
      category: "jewelery",
      image: "https://random.imagecdn.app/500/500",
      rating: {
          rate: 3,
          count: 400
        }
    }
    this.http.post(this.configUrl, this.body).subscribe();
    this.appcom.products.push(this.body);
    
  }
}
