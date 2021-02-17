import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pilotes',
  templateUrl: './pilotes.component.html',
  styleUrls: ['./pilotes.component.css']
})
export class PilotesComponent {

  pilotesList = 
  this.cartService.getPilotesList();


  constructor(private cartService: CartService) {
}

}
