import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(){

    return [
      { 'name':'DASHBOARD', submenus:[{'name':'Bids',route:''},{'name':'Credit',route:''}]},
      { 'name':'DEMAND', submenus:[{'name':'Bids',route:''},{'name':'Credit',route:''}]},
      { 'name':'ORDERS', submenus:[{'name':'Marketplace',route:''},{'name':'Direct',route:''},{'name':'Digital',route:''},{'name':'OTT',route:''}]},
      { 'name':'SETUP', submenus:[{'name':'Users',route:''},{'name':'Orders',route:''},{'name':'Channels',route:''},{'name':'Bids',route:''}]}
    ];

}

}
