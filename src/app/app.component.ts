import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Restaurant App Assignment';
  visible = false;
  selectedOption = 'popular'
  options = [
    {value: 'popular', name: 'Popular'},
    {value: 'burgers', name: 'Burgers'},
    {value: 'steaks', name: 'Steaks'},
  ];

  toggleSideBar() {
    this.visible = !this.visible;
  }
}
