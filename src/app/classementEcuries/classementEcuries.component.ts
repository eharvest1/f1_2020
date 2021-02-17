import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-classementEcuries',
  templateUrl: './classementEcuries.component.html',
  styleUrls: ['./classementEcuries.component.css']
})
export class ClassementEcuriesComponent {

  ecuriesList = 
  this.cartService.getClassementEcuries();


  constructor(private cartService: CartService) {

 
}

}
