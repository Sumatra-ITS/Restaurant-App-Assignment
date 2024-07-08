import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  valueChange = output<number>()
  value = input<number>();

  increment(step: number) {
    this.valueChange.emit((this.value() || 0) + step)
  }

}
