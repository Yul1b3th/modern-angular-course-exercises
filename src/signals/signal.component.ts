import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  template: `
    <div class="box signal" [style.background]="color">
      Grandchild
      <button (click)="updateColor()">Update Color</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `.signal { padding: 10px; margin: 10px; border: 2px dotted green; }`,
  ],
})
export class SignalComponent {
  message = signal('Hola, mundo!');
  // Signal de solo lectura
  messageReadonly = this.message.asReadonly();
}
