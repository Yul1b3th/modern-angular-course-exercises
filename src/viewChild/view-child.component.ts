import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  template: `
    <input #inputRef type="text" />
  `,
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('inputRef') inputElement!: ElementRef;

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }
}
