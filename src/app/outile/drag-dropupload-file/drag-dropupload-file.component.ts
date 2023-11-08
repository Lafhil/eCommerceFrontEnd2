import { Component } from '@angular/core';
import {FileHandel} from "../../model/model";
import {DragDirective} from "../drag.directive";

@Component({
  selector: 'app-drag-dropupload-file',
  templateUrl: './drag-dropupload-file.component.html',
  styleUrls: ['./drag-dropupload-file.component.css']
})
export class DragDropuploadFileComponent {
  dropedFile(evt:Event){
    console.log("file droped");
  }
}
