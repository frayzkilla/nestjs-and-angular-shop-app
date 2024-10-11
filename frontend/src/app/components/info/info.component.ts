import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  constructor(
    private appcom: AppComponent
  ){}


  changeVisibility(): void{
    this.appcom.isInfoVisible = false;
  }
}
