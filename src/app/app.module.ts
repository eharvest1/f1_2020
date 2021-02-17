import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopButtonsComponent } from './top-buttons/top-buttons.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
// import { ShippingComponent } from './shipping/shipping.component';
import { PilotesComponent } from './pilotes/pilotes.component';
import { EcuriesComponent } from './ecuries/ecuries.component';
import { ClassementPilotesComponent } from './classementPilotes/classementPilotes.component';
import { ClassementEcuriesComponent } from './classementEcuries/classementEcuries.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {ClassementGPComponent } from './classementGP/classementGP.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  MatExpansionModule
} from '@angular/material/expansion';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule, 
    FormsModule,  
    BrowserAnimationsModule,
    MatExpansionModule,
    RouterModule.forRoot([
      // { path: '', component: ProductListComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
      // { path: 'shipping', component: ShippingComponent },
      { path: 'pilotes', component: PilotesComponent },
      { path: 'ecuries', component: EcuriesComponent },
      { path: 'classementPilotes', component: ClassementPilotesComponent },
      { path: 'classementEcuries', component: ClassementEcuriesComponent },
      { path: 'classementGP', component: ClassementGPComponent},

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TopButtonsComponent,
    // ProductListComponent,
    // ProductAlertsComponent,
    // ProductDetailsComponent,
    // ShippingComponent,
    PilotesComponent,
    EcuriesComponent,
    ClassementPilotesComponent,
    ClassementEcuriesComponent,
    ClassementGPComponent,
    SideNavComponent,
    HeaderComponent,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
