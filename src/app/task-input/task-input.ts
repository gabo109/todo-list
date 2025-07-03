import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInput {
  tarea = '';
  @Output() add = new EventEmitter<string>();
  agregarTarea() {
    const desc = this.tarea.trim();
    if (desc) {
      this.add.emit(this.tarea);
      this.tarea = '';
    }
  }
}
