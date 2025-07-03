import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { Tarea } from '../app';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tareas: Tarea[] = [];
  @Output() remove = new EventEmitter<number>();

}
