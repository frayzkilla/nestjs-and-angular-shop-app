import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { LimitTitlePipe } from './pipes/limit-title.pipe';
import { AddItemComponent } from './components/add-item/add-item.component';
import { InfoComponent } from './components/info/info.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FilterProductsPipe,
    LimitTitlePipe,
    AddItemComponent,
    InfoComponent,
    PurchaseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
