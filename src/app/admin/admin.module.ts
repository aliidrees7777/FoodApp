import { AddrecipeService } from './views/product-management/services/addrecipe.service';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { OrderManagementComponent } from './views/order-management/order-management.component';
import { RecipeManagementComponent } from './views/recipe-management/recipe-management.component';
import { ProductManagementComponent } from './views/product-management/product-management.component';
import { StockManagementComponent } from './views/stock-management/stock-management.component';
import { UserManagementComponent } from './views/user-management/user-management.component';
import { ReportsComponent } from './views/reports/reports.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { FormGroup , FormControl } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'foodapp'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    RouterModule.forRoot([

      { path: '', component: RecipeManagementComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'order-management', component: OrderManagementComponent },
      { path: 'product-management', component: ProductManagementComponent },

      { path: 'stock-management', component: StockManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'reports', component: ReportsComponent },
      

  
    ])
  ],
  declarations: [
    DashboardComponent,
    CategoriesComponent,
    OrderManagementComponent, 
    RecipeManagementComponent, 
    ProductManagementComponent, 
    StockManagementComponent, 
    UserManagementComponent, 
    ReportsComponent, 
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,

  ],

  exports : [
    DashboardComponent, 
    CategoriesComponent, 
    OrderManagementComponent, 
    RecipeManagementComponent, 
    ProductManagementComponent, 
    StockManagementComponent, 
    UserManagementComponent, 
    ReportsComponent, 
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
   

  ],
  providers:[
    AddrecipeService
      ]
})
export class AdminModule { }
