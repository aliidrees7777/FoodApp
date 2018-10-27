import { Injectable } from '@angular/core';

import { Categ} from '../models/schema';

import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root' 
})
export class CategoryService {
  categoriesCollection: AngularFirestoreCollection<Categ>;
  categories: Observable<Categ[]>

  constructor(public afss:AngularFirestore) { 

    

    this.categoriesCollection=this.afss.collection('categories');

    this.categories=this.afss.collection("categories").valueChanges();

    // this.categoriesCollection=this.afss.collection('categories', ref => ref.orderBy('title', 'desc'));

    // this.categories=this.afss.collection('categories').snapshotChanges().pipe(map(changes=>{
    //   return changes.map(a=>{
    //     const data=a.payload.doc.data() as Categ;
    //     data.category=a.payload.doc.cate;
    //     return data;
    //   });
    // }));
  }  

  getItems(){
    return this.categories;
  }

  addCategory(categ: Categ){
    this.categoriesCollection.add(categ);
  }



}
