import { Component,OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerceFrontEnd';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: '<span class="text-xl font-bold">Refresh</span>',
            escape: false,
            icon: 'pi pi-refresh',
            iconClass: 'text-xl'
          },
          {
            label: '<span class="text-xl font-bold">Delete</span>',
            escape: false,
            icon: 'pi pi-times',
            iconClass: 'text-xl'
          }
        ]
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]
      }
    ];
  }
}
