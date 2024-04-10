import { RefetchDataService } from './../refetch-data.service';
import { TodoItem } from '../../lib/types/todo.type';
import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private api_url = "http://localhost:8080/todos";

  getTodos() {
    let todosOb : Observable<TodoItem[]>;
    todosOb = this.http.get<TodoItem[]>(this.api_url);

    todosOb.subscribe((res) => {
      this.todoItems = res;
    });
  }

  async ngOnInit() {
    this.getTodos(); // First time fetch;
    this.refetch.triggerRefetchObservable().subscribe(() => {
      this.getTodos();
    })
  }

}
