import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

type Tarea = {
  id: number;
  descripcion: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';
  tarea: string = '';
  tareas: Tarea[] = [];
  private contadorId: number = 1;

  agregarTarea() {
    const desc = this.tarea.trim();
    if (desc) {
      const nuevaTarea: Tarea = {
        id: this.contadorId++,
        descripcion: desc,
      };
      this.tareas.push(nuevaTarea);
      this.tarea = '';
    }
  }

  eliminarTareas() {
    this.tareas = [];
  }

  completarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

}
