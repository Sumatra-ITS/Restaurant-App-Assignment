import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SelectButtonComponent } from './components/select-button/select-button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { RestaurantCoverComponent } from './components/restaurant-cover/restaurant-cover.component';
import {NgOptimizedImage} from "@angular/common";
import { H2Component } from './components/h2/h2.component';
import {ToggleButtonModule} from "primeng/togglebutton";
import { ButtonComponent } from './components/button/button.component';
import { H4Component } from './components/h4/h4.component';
import { PComponent } from './components/p/p.component';
import {BadgeModule} from "primeng/badge";
import { CounterComponent } from './components/counter/counter.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { H3Component } from './components/h3/h3.component';
import { OrderLineComponent } from './components/order-line/order-line.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { H5Component } from './components/h5/h5.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    SearchInputComponent,
    DishCardComponent,
    RestaurantCoverComponent,
    H2Component,
    ButtonComponent,
    H4Component,
    PComponent,
    CounterComponent,
    IconButtonComponent,
    OrderComponent,
    PaymentComponent,
    H3Component,
    OrderLineComponent,
    DataListComponent,
    H5Component,
    InputFieldComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    NgOptimizedImage,
    ToggleButtonModule,
    BadgeModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
