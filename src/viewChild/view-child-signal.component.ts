import { Component, viewChild, ElementRef, effect } from '@angular/core';

@Component({
  selector: 'app-viewchild-signal',
  standalone: true,
  template: `
    <input #inputRef type="text" />
  `,
})
export class ViewChildSignalComponent {
  inputElement = viewChild<ElementRef>('inputRef');

  constructor() {
    effect(() => {
      const inputEl = this.inputElement();
      if (inputEl) {
        inputEl.nativeElement.focus();
      }
    });
  }
}
