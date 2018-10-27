import { AdminModule } from './admin/admin.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component'; 
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AdminModule,
    CustomerModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
