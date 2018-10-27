import { Injectable } from '@angular/core';

import { Categ} from '../models/schema';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesCollection: AngularFirestoreCollection<Categ>;
  categories: Observable<Categ[]>

  constructor(public afs:AngularFirestore) { 

    this.categoriesCollection=this.afs.collection('categories');

    //this.recipes=this.afs.collection('recipes').valueChanges(); //.value will return the collection as a observabe but not id so we have to write getMethod

    this.categories=this.afs.collection('categories').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Categ;
        data.category=a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems(){
    return this.categories;
  }

  addCategory(categ: Categ){
    this.categoriesCollection.add(categ);
  }



}
