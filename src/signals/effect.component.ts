import { Component, signal, effect, OnInit, inject, Injector, EffectRef } from '@angular/core';

@Component({
  selector: 'app-effect',
  standalone: true,
  template: `
    <button (click)="increment()">Incrementar</button>
    <p>Valor: {{ value() }}</p>
  `,
})
export class EffectLogComponent implements OnInit {

  value = signal(0);

  myInjector = inject(Injector);
  logEffect: EffectRef | null = null;
  // constructor() {
  //   effect( ()=> console.log('El valor cambió a:', this.value()))
  // }

  ngOnInit(): void {
    this.logEffect =  effect(()=> console.log('El valor cambió a:', this.value()), {
      injector: this.myInjector,
      manualCleanup: true
    }); 
  }


  stopEffect():void {
    this.logEffect?.destroy();
  }
  increment() {
    this.value.set(this.value() + 1);
  }
}
