/* import { ChomeComponent } from './chome/chome.component';

import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { CustomizeOrderComponent } from './customize-order/customize-order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component'; */
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
/*     RouterModule.forRoot([

      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'thank-you', component: ThankYouComponent },
      { path: 'customize-order', component: CustomizeOrderComponent },
  
    ]) */
  ],
  declarations: [
 /*    CartComponent,
    CheckoutComponent,
    ThankYouComponent,
    CustomizeOrderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent  */   
  ]
})
export class CustomerModule { }
