import {
  Component,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ViewChildComponent } from './viewChild/view-child.component';
import { ViewChildSignalComponent } from './viewChild/view-child-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ViewChildComponent, ViewChildSignalComponent],
  template: `
  <pre>
    <app-viewchild-signal />
  </ pre>
  `,
})
export class App {

}
bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
