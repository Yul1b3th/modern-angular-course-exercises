import { JsonPipe } from '@angular/common';
import { Component, signal, effect, WritableSignal, untracked } from '@angular/core';

export interface Task {
  id: string;
  name: string;
  completed: boolean;
};

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [JsonPipe],
  template: `
  <button (click)="addTask()">Agregar Tarea</button>
  <ul>
    @for(task of tasks(); track task.id){
      <pre><li>{{ task | json }}</li></pre>
    }
  </ul>
  `
})
export class TaskListComponent {
  tasks = signal<Task[]>([], { equal: this._compararArrays });

  constructor() {
    effect((onCleanUp)=> {
      // const currenTasks = untracked( ()=> this.tasks());
      console.log('Tareas', this.tasks());
      
      const timeout = setTimeout(()=> {
        console.log('Tarea despues de 2 segundos')
      }, 2000)
      onCleanUp(()=> clearTimeout(timeout));
    })
  }

  addTask(): void {
    const task = this.generateTask();
    this.tasks.update((tasks:Task[]) => [...tasks, task]);
  }

  generateTask(): Task { 
    const newId = this._generateRandomId();
    return {
      id: newId,
      name : `New task ${newId}`,
      completed : false,
    }
  }

  
  private _generateRandomId(): string {
    const randomPart = Math.random().toString(36).slice(2, 11);
    const timestamp = Date.now().toString();
    return `id-${randomPart}-${timestamp}`;
  }
  
  

  private _compararArrays<T>(arr1: T[], arr2: T[]): boolean {
    if (!arr1 || !arr2) {
      return arr1 === arr2; 
    }
  
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    return arr1.every((valor, índice) => valor === arr2[índice]);
  }
  
}
