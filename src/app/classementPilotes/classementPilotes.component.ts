import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-classementPilotes',
  templateUrl: './classementPilotes.component.html',
  styleUrls: ['./classementPilotes.component.css']
})
export class ClassementPilotesComponent {

  ecuriesList = 
  this.cartService.getClassementPilotes();


  constructor(private cartService: CartService) {

 
}

}
