// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { OtherChildComponent } from '../other-child/other-child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, OtherChildComponent],
  template: `
    <div class="box parent" [style.background]="color">
      Parent
      <button (click)="triggerChangeDetection()">Trigger Change Detection</button>
      <app-child></app-child>
      <app-other-child></app-other-child>
    </div>
  `,
  styles: [`.parent { padding: 10px; margin: 10px; border: 2px solid black; }`],
})
export class ParentComponent {
  color = this.getRandomColor();
  counter = 0;

  constructor() {
    // Mark component to Dirty 1
    // setInterval(() => this.counter++, 1000);
  }

  triggerChangeDetection() {
    this.color = this.getRandomColor();
    // this.parentData = 'Updated Data ' + Math.random(); // Cambia la referencia
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
