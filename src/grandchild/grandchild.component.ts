// grandchild.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  standalone: true,
  template: `
    <div class="box grandchild" [style.background]="color">
      Grandchild
      <button (click)="updateColor()">Update Color</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `.grandchild { padding: 10px; margin: 10px; border: 2px dotted green; }`,
  ],
})
export class GrandchildComponent {
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
