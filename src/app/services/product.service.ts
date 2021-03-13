import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

// Injectable servis
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44351/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts() : Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number) : Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

}
