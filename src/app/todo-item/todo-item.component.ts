import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() title: string = "";
  @Input() completed: boolean = false;
  @Input() todoId: string = "";

  unCheck() {

  }

  complete() {

  }

  toggleComplete() {

  }
}

