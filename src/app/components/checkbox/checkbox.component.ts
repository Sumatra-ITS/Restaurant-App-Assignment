import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  label = input<string>()

  value = input<boolean>(false);
  valueChange = output<boolean>()

  valueChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.checked)
  }
}
