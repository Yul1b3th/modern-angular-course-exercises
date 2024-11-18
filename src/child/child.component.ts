// child.component.ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandchildComponent],
  template: `
    <div class="box child" [style.background]="color">
      Child 
      <button (click)="updateColor()">Update Color</button>
      <app-grandchild></app-grandchild>
    </div>
  `,
  styles: [`.child { padding: 10px; margin: 10px; border: 2px dashed blue; }`],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent {
  color = this.getRandomColor();

  counter = 0;

  constructor() {
    // Mark component to Dirty 2
    // setInterval(() => this.counter++, 1000);
  }

  ngDoCheck(): void {
    this.color = this.getRandomColor(); // Cambia el color al detectar cambios
  }

  updateColor() {
    this.color = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
