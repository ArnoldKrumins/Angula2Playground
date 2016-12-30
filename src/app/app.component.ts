import { Component } from '@angular/core';
import {MenuService} from "./services/menu.service";

@Component({
  selector: 'app-root',
  providers:[MenuService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private items;

  constructor(private menuService:MenuService){
     this.items = menuService.getMenuItems();
  }

}
