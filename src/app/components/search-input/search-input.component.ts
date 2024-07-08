import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  value = input<any>();
  valueChange = output<any>()

  valueChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value)
  }
}
