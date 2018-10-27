import { Observable , Subscriber, Subscription} from 'rxjs';
import { AddrecipeService } from './services/addrecipe.service';
import { Schema, Categ, Cata, Getting } from './models/schema';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service'


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  
  recipe: Schema={
    name:'',
    serving:'',
    carb:'',
    fat:'',
    calories:'',
    protien:'',
    rda:'',
    flag:''


  }



  categ: Categ={
    category:''

  }

  travelArray: Cata[];

  getting: Getting[];

  selectedCategoriey: string = '';



  constructor(private addrecipeService: AddrecipeService, private addcategoryService: CategoryService) { }

  ngOnInit() { 
          var x = this.addcategoryService.getItems();
    x.subscribe( items=> {
        this.travelArray=[];
      items.forEach(element=>{
    
        this.travelArray.push( element as Cata );;
  
      });
    });


    this.addrecipeService.getItems().subscribe( items=> {
        this.getting=[];
      items.forEach(element=>{
    
        this.getting.push( element as Getting );;
  
      });
    });
  
  }
 
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCategoriey = event.target.value;
  }
  onSubmit(){
      this.addrecipeService.addRecipe(this.recipe);
      this.recipe.name='';
      this.recipe.serving='';
      this.recipe.fat='';
      this.recipe.carb='';
      this.recipe.calories='';
      this.recipe.protien='';
      this.recipe.rda='';
      this.recipe.flag=''; 
  }

  onSubmitC(){
   
    this.addcategoryService.addCategory(this.categ);
    this.categ.category='';
}

}
