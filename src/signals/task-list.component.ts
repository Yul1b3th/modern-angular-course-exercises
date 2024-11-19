import { Component, signal, effect, WritableSignal, onTracked, onCleanup } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  template: `
    <ul>
      <li *ngFor="let task of tasks()">{{ task }}</li>
    </ul>
    <button (click)="addTask('Nueva Tarea')">Agregar Tarea</button>
  `
})
export class TaskListComponent {
  // Signal de tareas con función de igualdad personalizada
  // tasks: WritableSignal<string[]> = signal([], (a, b) => JSON.stringify(a) === JSON.stringify(b));
  tasks: WritableSignal<string[]> = signal([]);
  // Efecto que realiza limpieza al monitorear cambios en la lista
  taskEffect = effect(() => {
    const currentTasks = onTracked(() => this.tasks());
    console.log('Lista de tareas actual:', currentTasks);

    // Simulación de un proceso asíncrono que se limpiará
    const timeout = setTimeout(() => {
      console.log('Tarea ejecutada después de 2 segundos');
    }, 2000);

    onCleanup(() => clearTimeout(timeout));
  });

  addTask(task: string) {
    this.tasks.update(tasks => [...tasks, task]);
  }
}
