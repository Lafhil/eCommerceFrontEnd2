import {SafeUrl} from "@angular/platform-browser";

export class ProductCategories {
  categoryId?: number
  categoryName?: string
  parent?:boolean
  imageDecode?:string
  categorieImage ?: any
  status?: string
  categorieParent?: ProductCategories
  categoryDesc?:string
  //productsByCategoryId?: Products[]
  categorieShilds?: ProductCategories[]
}

export class Products {
  productId?: number
  productName?: string
  description?: string
  price?: number
  photo?: Blob
 // adminOrderItemsByProductId?: any[]
//  orderItemsByProductId?: any[]
//  productReviewsByProductId?: any[]
  images?: Blob[]
}
export interface Color{
  label:string
  value:string
}
export interface FileHandel{
  file:File,
  url:SafeUrl
}
