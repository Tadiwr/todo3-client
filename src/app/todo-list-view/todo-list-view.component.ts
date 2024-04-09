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

}
