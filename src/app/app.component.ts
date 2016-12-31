///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {MenuService} from "./services/menu.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-root',
  providers:[MenuService],
  directives:[NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private items:any;

  constructor(private menuService:MenuService){

  }

  ngOnInit(){
    this.items = this.menuService.getMenuItems();
    console.log(this.items);
  }

}
