import {
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <app-parent />
  `,
})
export class App {
  name = 'Angular';
}
bootstrapApplication(App);
