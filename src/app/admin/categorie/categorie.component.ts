import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ConfirmationService, Message, MessageService, TreeNode} from 'primeng/api';
import {CategorieServiceService} from "../../services/categorie-service.service";
import {FileHandel, ProductCategories} from "../../model/model";


import {DomSanitizer} from "@angular/platform-browser";
import {InputSwitchOnChangeEvent} from "primeng/inputswitch";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CategorieComponent implements OnInit, AfterContentChecked{
  // isParent:boolean=false
  imageUrl:any
  categoriesParents:ProductCategories[]=[]
  messageUploadImage:Message[]=[];
  selectedCaegorieParent?:ProductCategories;
   categorie:ProductCategories=new ProductCategories();
  private size:number=0;
  private index:number=0;
  constructor(private categorieService:CategorieServiceService,private sanitizer:DomSanitizer,
              private messageService:MessageService,private changeDetector: ChangeDetectorRef,
              private confirmationService:ConfirmationService) {

  }
  files: TreeNode[]=[];
  catImgs:any[]=[];
  selectedFile?:File;
  selectedCat!:TreeNode<any> | any;
  ngOnInit() {

   this.chargerTreeCategories();
   //this.categorieService.getAllCategories().then((data) => (this.files = data));
  }
  private categoriesToTreeNodes(categories: ProductCategories[]) {
this.files=[];
    for (let cat of categories) {
      cat.imageDecode?.replace("data:image/jpeg;base64,", '');

     // console.log(this.index+"  "+cat.categoryName+" "+cat.parent )
      if(cat.parent){
        // @ts-ignore
        this.files.push(this.subCatToTreeNode(cat));
      }
    }
  }

  private subCatToTreeNode(cat:ProductCategories): TreeNode {
    let catTreeNode: TreeNode[] = [];
    if (cat.categorieShilds?.length!=undefined) {
      for (let c of cat.categorieShilds) {

        // @ts-ignore
        catTreeNode.push(this.subSubCat(c));

      }
    }
    return {
      key:cat.categoryId?.toString(),
      label: cat.categoryName,
      data: cat,
      icon:"pi pi-folder",
      children: catTreeNode

    };
  }
private subSubCat(cat:ProductCategories): TreeNode{
  let catTreeNode: TreeNode[] = [];
  if(cat.categorieShilds!=undefined)
    for(let child of cat.categorieShilds){
      this.index++;
      // @ts-ignore
      catTreeNode.push(this.categorieToTreeNode(child));

    }
  return {
    key:cat.categoryId?.toString(),
    label: cat.categoryName,
    data: cat,
    icon:"pi pi-folder",
    children: catTreeNode

  };
}
  private categorieToTreeNode(cat: ProductCategories) : TreeNode {
    return {

      key:cat.categoryId?.toString(),
      label: cat.categoryName,
      data:cat,
      icon:"pi pi-folder"
    }
  }
  save(){

    if(this.categorie!=undefined) {

        this.categorieService.addCategorie(this.categorie,this.selectedCaegorieParent)
          .subscribe(res =>{
            this.files.splice(0,this.files.length)
             this.chargerTreeCategories();
          this.resetForm();
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'categorie Saved with success' });

            },
                                  error=>  {

                                    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.error.message});

                                  }
      );


    }
    this.chargerTreeCategories();
  }
  fileDropped(fileHandel:FileHandel){
    if(fileHandel.file.type=="image/jpeg"){
      this.selectedFile=fileHandel.file;
    this.convertFileToUri(this.selectedFile);
      console.log(this.categorie.imageDecode)
      this.messageUploadImage=[{ severity:'success', summary: 'seccess', detail: 'image uploaded with success' }];
    }

    else
      this.messageUploadImage=[{ severity:'error', summary: 'error', detail: 'only jpeg type' }];

  }
  fileUploaded(event:any){
    if(event.target.files[0].type=="image/jpeg"){
      this.selectedFile=event.target.files[0];
      if(this.selectedFile!=undefined) {
        this.convertFileToUri(this.selectedFile);

        console.log(this.categorie.imageDecode)
        this.messageUploadImage = [{severity: 'success', summary: 'seccess', detail: 'image uploaded with success'}];
      }
    }

    else
      this.messageUploadImage=[{ severity:'error', summary: 'error', detail: 'only jpeg type' }];


  }
  private dataUriToBlob(picBytes:any,imageType:any){
  const bytString=window.atob(picBytes);
  const arrbuffer=new ArrayBuffer(bytString.length);
  const int8Array=new Uint8Array(arrbuffer);
  for (let i=0;i<bytString.length;i++){
    int8Array[i]=bytString.charCodeAt(i);
  }
  const blob=new Blob([int8Array],{type:imageType});
  return blob;
  }
  //convert fichier from base 64 to blob

   convertFileFromBase64(base64: any) {
    if(base64!=undefined)
    base64 = base64.replace("data:image/jpeg;base64,", '');
    const byteArray = new Uint8Array(
      atob(base64)
        .split('')
        .map((char) => char.charCodeAt(0))
    );
    const file = new Blob([byteArray], { type: 'image/jpeg' });

    const fileUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))//URL.createObjectURL(file);
    this.catImgs.push(fileUrl)
    return fileUrl;

  }
   convertFileToUri(file:File){

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      // @ts-ignore
      this.categorie.imageDecode=  reader.result.toString().replace("data:image/jpeg;base64,", '');

    };

  }
  getCategorieSelected(event:any){
    this.categorie=this.selectedCat.data
    console.log(this.categorie.imageDecode?.length+ "From selected categorie")
      this.imageUrl=this.convertFileFromBase64(this.categorie.imageDecode);

    // this.categorieService.getCategoriesIgnorCurrent(this.categorie.categoryId).subscribe(
    //   res=>{this.categoriesParents=res;
    //  }
    // );
    this.getParent();


  //this.isParent !=this.categorie.parent;
  }
  selectParent(){
  // this.selectedCaegorieParent?.categorieShilds?.push(this.categorie)
    console.log(this.selectedCaegorieParent);
  }
  chekParentSwitch(event:InputSwitchOnChangeEvent){

   this.categorie.parent=event.checked;
   if(!this.categorie.parent)
     this.selectedCaegorieParent=undefined
  }


  deleteCategorie(){
    if(this.categorie.categoryId!=undefined){
      this.categorieService.deleteCategorie(this.categorie.categoryId).subscribe(res=>{

      });
      this.categorie=new ProductCategories();
      this.selectedCaegorieParent=undefined;
      this.chargerTreeCategories();

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'categorie deleted with success' })

    }
  }
 private chargerTreeCategories(){
this.files=[];
    this.categorieService.getAllCategories().subscribe(
      res => {
        this.categoriesParents=res;
        this.categoriesToTreeNodes(res);
  this.expandAll();

      }
    );
    //console.log( this.files?.length+'mmmmmmmmmmmmmmmmmmmmmmmm')

  }
  updateSubCat(){
    // @ts-ignore
    let index=this.selectedCaegorieParent.categorieShilds?.indexOf(this.categorie);
    console.log("shild+++++"+index);
   // @ts-ignore
    if(index!=undefined && this.selectedCaegorieParent.categorieShilds!=undefined){
      // @ts-ignore
      this.selectedCaegorieParent.categorieShilds[index]=this.categorie;
   // @ts-ignore
      console.log(this.selectedCaegorieParent.categorieShilds[index].categoryName+"llllllllllllllllll")
   }
   //return parent;
  }
  resetForm(){
    var dirtyFormID = 'categorieForm';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
    this.selectedCat=undefined;
    this.messageUploadImage=[];
    this.chargerTreeCategories();

  }
  deleteImage(){
    this.categorie.imageDecode=undefined;
    this.categorie.categorieImage=undefined;
  }
  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }
  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  getParent(){
    this.categorieService.getParentOfCategorie(this.categorie.categoryId).subscribe(
      rep=>this.selectedCaegorieParent=rep
    );
  }
  confirmeDeleteCategorie(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to Remove this Categorie?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteCategorie();
        //this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Delete Categorie Rejected' });
      }
    });
  }
}
