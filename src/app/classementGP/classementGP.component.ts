import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-classementGP',
  templateUrl: './classementGP.component.html',
  styleUrls: ['./classementGP.component.css']
})
export class ClassementGPComponent implements OnInit {

 
  public  classementGP ;
  id_gp: string;

 public constructor(private actRoute: ActivatedRoute,private router:Router,private cartService: CartService) {
    this.id_gp = this.actRoute.snapshot.params.id;
    
  }
  ngOnInit() {
    this.actRoute.queryParams.subscribe(queryParams => {
      this.classementGP = this.cartService.getClassementGP(queryParams.id_gp);
      
      
    });
  
  //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //     return false;
  //  }

  //  this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        // trick the Router into believing it's last link wasn't previously loaded
  //        this.router.navigated = false;
  //        // if you need to scroll back to top, here is the right place
  //        window.scrollTo(0, 0);
  //     }
  // });

  }
 
}

 

  
  


 

