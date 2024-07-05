import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent {
  options = input<{ value: string, name: string }[]>()
  valueChange = output<string>()
  value = input<string>();

  onSelect(value: string) {
    this.valueChange.emit(value)
  }
}
