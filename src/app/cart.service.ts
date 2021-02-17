import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];

    public static  gp: Info ;
    static classementGP: any;

  constructor(private http: HttpClient) {
    CartService.gp = new Info();
    CartService.gp.id_gp = 1;

  };

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
  
   return this.http.get('/assets/shipping.json');
  }
  getPilotesList() {
    var array;
    array = new ArrayBuffer(1);
    array = this.http.post('http://localhost:8088/listePilotes', array);
    return array ;
   }

   getEcuriesList() {
    var array;
    array = new ArrayBuffer(1);
    return this.http.post('http://localhost:8088/listeEcuries', array);
   }

   getClassementPilotes() {
    var array;
    array = new ArrayBuffer(1);
    return this.http.post('http://localhost:8088/classementPilotes', array);
   }

   getClassementEcuries() {
    var array;
    array = new ArrayBuffer(1);
    return this.http.post('http://localhost:8088/classementConstructeurs', array);
   }

   getListeGPs() {
    var array;
    array = new ArrayBuffer(1);
 
    return this.http.post('http://localhost:8088/listeGrandsPrix', array);
   }

 




   getClassementGP( id_gp) {

   //alert("hello 2");
    var obj = 
    {
    "id_gp":id_gp
    };
    var output = JSON.stringify(obj);
   // alert("hello 3");
    /// window.location.reload();
     return this.http.post('http://localhost:8088/classementGrandsPrix',   obj, httpOptions);
     
   }

}

class Info {
  public id_gp: number;
  public get _id_gp(): number {
    return this.id_gp;
  }
  public set _id_gp(value: number) {
    this.id_gp = value;
  }
  

}