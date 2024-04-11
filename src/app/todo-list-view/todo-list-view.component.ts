import { RefetchDataService } from './../refetch-data.service';
import { TodoItem } from '../../lib/types/todo.type';
import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Component({
    selector: 'app-todo-list-view',
    standalone: true,
    templateUrl: './todo-list-view.component.html',
    styleUrl: './todo-list-view.component.css',
    imports: [TodoItemComponent, HttpClientModule],
    providers : [HttpClientModule]
})

export class TodoListViewComponent {

  todoItems : TodoItem[] = [];
  message = "Please Wait...";

  constructor(private http: HttpClient, private refetch : RefetchDataService) {}

  private req_url = "http://localhost:8080/todos?ztoa=true";

  getTodos() {

    this.message = "Please Wait..";

    axios(this.req_url, {
      method : "GET",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      }
    }).then((res) => {

      this.todoItems = res.data as TodoItem[];
      if (this.todoItems.length === 0) {
        this.message = "You don't have any todo";
      }

    }).catch((err) => {
      const e = err as Error;
      this.message = e.message;
    })
  }

  async ngOnInit() {
    this.getTodos(); // First time fetch;
    this.refetch.triggerRefetchObservable().subscribe(() => {
      this.getTodos();
    })
  }

}
