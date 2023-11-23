import { Component,OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Products} from "../../../model/model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
   products:Products[]=[]
  constructor(private productService:ProductService) {
  }
  ngOnInit(){
    this.productService.getAllProduct().subscribe(
      res=>this.products=res
    )
  }
  // @ts-ignore
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
