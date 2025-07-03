import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../app';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {

  @Input() tarea!: Tarea;
  @Output() remove = new EventEmitter<number>();  

}
