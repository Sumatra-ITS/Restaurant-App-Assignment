import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  label = input.required<string>();
  prefix = input<string>();
  type = input<string>('text')
  required = input<boolean>(false)
  placeholder = input<string>();
  value = input<any>();
  valueChange = output<any>()

  valueChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value)
  }
}
