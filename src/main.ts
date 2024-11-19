import {
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {TaskListComponent} from './signals/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  template: `
    <app-task-list />
  `,
})
export class App {
  name = 'Angular';
}
bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
