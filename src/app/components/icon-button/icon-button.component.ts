import {Component, input} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  size = input<'sm' | 'md' | 'lg'>('md')
  radius = input<'lg' | 'full'>('lg')
  bg = input<'red'>()
}
