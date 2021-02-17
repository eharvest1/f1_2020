import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-buttons',
  templateUrl: './top-buttons.component.html',
  styleUrls: ['./top-buttons.component.css']
})
export class TopButtonsComponent {


  constructor( private cartService: CartService){

  }


  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
