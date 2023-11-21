import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TreeNode} from "primeng/api";
import {ProductCategories} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private httpClient:HttpClient) {
  }
  getAllCategories():Observable<ProductCategories[]>{
    return this.httpClient.get<ProductCategories[]>('http://localhost:8080/api/categoriProduct')
  }

  addCategorie(categorie: ProductCategories | undefined,parent?:ProductCategories|null):Observable<ProductCategories>{
     console.log(categorie,parent);
    return this.httpClient.post('http://localhost:8080/api/categoriProduct/withParent',[categorie,parent]);
  }

  updateCategorieParent(categorie: ProductCategories, parent: ProductCategories | undefined|null){
    return this.httpClient.post('http://localhost:8080/api/categoriProduct/updateCategorieParent',[categorie,parent]);
  }

  getParentOfCategorie(id: number | undefined):Observable<ProductCategories>{
    return this.httpClient.get<ProductCategories>('http://localhost:8080/api/categoriProduct/getParent/'+id);

  }
  deleteCategorie(id:number|undefined):Observable<any>{
    return this.httpClient.delete('http://localhost:8080/api/categoriProduct/'+id);
  }
  // upadateCategorie(id:number|undefined):Observable<any>{
  //   return this.httpClient.delete('http://localhost:8080/api/categoriProduct/'+id);
  // }
getCategoriesIgnorCurrent(current:number|undefined):Observable<ProductCategories[]>{
  return this.httpClient.get<ProductCategories[]>('http://localhost:8080/api/categoriProduct/getCategoriesIgnorCurrent/'+current);
}
  getCategoriesShild():Observable<ProductCategories[]>{
    return this.httpClient.get<ProductCategories[]>('http://localhost:8080/api/categoriProduct/getShilds');
  }
}
