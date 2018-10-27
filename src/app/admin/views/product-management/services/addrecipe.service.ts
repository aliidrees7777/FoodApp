import { Injectable } from '@angular/core';

import { Schema, Categ} from '../models/schema';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddrecipeService {

  reipesCollection: AngularFirestoreCollection<Schema>;
  recipes: Observable<Schema[]>

  constructor(public afs:AngularFirestore) { 

    this.reipesCollection=this.afs.collection('recipes');
    

    this.recipes=this.afs.collection("recipes").valueChanges();

    //this.recipes=this.afs.collection('recipes').valueChanges(); //.value will return the collection as a observabe but not id so we have to write getMethod

    
 
  }

  getItems(){
    return this.recipes;
  }

  addRecipe(recipe: Schema){
    this.reipesCollection.add(recipe);


  }

}
