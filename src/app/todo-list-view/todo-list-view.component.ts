import { TodoItem } from './../todo-item/todo-item.component';
import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
    selector: 'app-todo-list-view',
    standalone: true,
    templateUrl: './todo-list-view.component.html',
    styleUrl: './todo-list-view.component.css',
    imports: [TodoItemComponent]
})

export class TodoListViewComponent {

  todoItems : TodoItem[] = [
    {id: 1, title: "Make git commits", completed:false},
    {id: 2, title: "Learn Java Spring Boot", completed:true},
    {id: 3, title: "Review Issue Log from Tadiwa", completed:false},
    {id: 3, title: "Read Tailwind docs", completed:true},
  ]

}
