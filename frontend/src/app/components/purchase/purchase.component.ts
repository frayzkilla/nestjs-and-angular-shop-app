import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss'
})
export class PurchaseComponent {
  constructor(
    private appcom: AppComponent
  ){}


  changeVisibility(): void{
    this.appcom.isBuyVisible = false;
  }
}
