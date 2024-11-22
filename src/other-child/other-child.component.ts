// other-child.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-other-child',
  standalone: true,
  template: `
    <div class="box other-child" [style.background]="color">
      Other Child
      <button (click)="updateColor()">Update Color</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `.other-child { padding: 10px; margin: 10px; border: 2px solid red; }`,
  ],
})
export class OtherChildComponent {
  color = this.getRandomColor();

  counter = 0;

  constructor() {
    // Mark component to Dirty 
    // setInterval(() => this.counter++, 1000);
  }

  updateColor() {
    this.color = this.getRandomColor();
  }

  ngDoCheck(): void {
    this.color = this.getRandomColor(); // Cambia el color al detectar cambios
  }

  private getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
