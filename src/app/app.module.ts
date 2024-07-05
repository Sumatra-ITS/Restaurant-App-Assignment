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

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    SearchInputComponent,
    DishCardComponent,
    RestaurantCoverComponent,
    H2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    NgOptimizedImage,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
