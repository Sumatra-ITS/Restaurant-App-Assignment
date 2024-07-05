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
    IconButtonComponent
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
