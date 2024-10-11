import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isNotCorrect = false;

  constructor(
    private appcom: AppComponent,
    private http: HttpClient
  ){}

  configUrl: string = 'http://localhost:3000/users/';

  changeVisibility(): void{
    this.appcom.isLoggingVisible = false;
  }

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit(): void {
    console.warn(this.profileForm.value.password);
    this.http.get(this.configUrl+this.profileForm.value.username+'/'+this.profileForm.value.password).subscribe({next:(res:any) => {
      if(res){
        this.appcom.isAuthorized = true;
        this.appcom.role = res.role;
        this.appcom.username = res.name;
        this.isNotCorrect = false;

        window.localStorage.setItem("username", res.name);
        window.localStorage.setItem("role", res.role);

        this.changeVisibility();
      } else {
        this.profileForm.value.username = "";
        this.profileForm.value.password = "";
        this.isNotCorrect = true;
      }
    }});
  }
}
