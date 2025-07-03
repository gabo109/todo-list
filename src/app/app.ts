import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskInput } from './task-input/task-input';
import { TaskList } from './task-list/task-list';

export interface Tarea {
  id: number;
  descripcion: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TaskInput,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';
  tareas: Tarea[] = [];

  agregarTarea(descripcion: string) {
    if (descripcion.trim() === '') return;
    this.tareas = [
      ...this.tareas,
      { id: this.tareas.length + 1, descripcion }
    ];
  }

  completarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

}
