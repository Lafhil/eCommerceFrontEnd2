import {SafeUrl} from "@angular/platform-browser";

export interface ProductCategories {
  categoryId: number
  categoryName: string
  categorieImage ?: Blob
  status?: string
  categorieParent?: ProductCategories
  productsByCategoryId?: Products[]
  categorieShilds?: ProductCategories[]
}

export interface Products {
  productId: number
  productName: string
  description?: string
  price?: number
  photo?: Blob
  adminOrderItemsByProductId?: any[]
  orderItemsByProductId?: any[]
  productReviewsByProductId?: any[]
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
