import { AddrecipeService } from './services/addrecipe.service';
import { Schema, Categ } from './models/schema';
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

  selectedCategoriey: string = '';



  constructor(private addrecipeService: AddrecipeService, private addcategoryService: CategoryService) { }

  ngOnInit() {

    this.addrecipeService.getItems().subscribe(items=>{    // service kay through observable data get hora hay database say or phr subscribe data show krwanay mein madad kr raha hay
      //console.log(items);
      this.recipe=this.recipe;// ab html mein data access kr sktay hain
      //console.log(this.items);
    })

    this.addcategoryService.getItems().subscribe(items=>{    // service kay through observable data get hora hay database say or phr subscribe data show krwanay mein madad kr raha hay
      //console.log(items);
      this.categ=this.categ;// ab html mein data access kr sktay hain
      //console.log(this.items);
    })


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
