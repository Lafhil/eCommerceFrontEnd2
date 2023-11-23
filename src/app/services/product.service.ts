import { Injectable } from '@angular/core';
import {ProductCategories, Products} from "../model/model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  addProduct(product:Products):Observable<Products>{
    return this.httpClient.post("http://localhost:8080/api/product",product);
  }
  getAllProduct():Observable<Products[]>{
    return this.httpClient.get<Products[]>("http://localhost:8080/api/product");
  }
  getAllProductsByCategorie(categorie:ProductCategories):Observable<Products[]>{
    return this.httpClient.get<Products[]>("http://localhost:8080/api/product/byCategorie/"+categorie.categoryId)
  }
  updateProduct(id:number,product:Products):Observable<Products>{
    return this.httpClient.put("http://localhost:8080/api/product/"+id,product);
  }
}
