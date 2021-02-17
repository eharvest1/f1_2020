import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ecuries',
  templateUrl: './ecuries.component.html',
  styleUrls: ['./ecuries.component.css']
})
export class EcuriesComponent {

  ecuriesList = 
  this.cartService.getEcuriesList();


  constructor(private cartService: CartService) {

 
}

}
