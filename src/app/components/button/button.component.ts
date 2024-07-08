import {Component, input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  color = input<'orange' | 'black' | 'gray'>('gray')
  radius = input<'full' | 'lg'>('lg')
  size = input<'sm' | 'md' | 'lg'>('md')
  width = input<'full'>()
}
