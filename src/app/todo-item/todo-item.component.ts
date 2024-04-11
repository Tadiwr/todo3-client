import { RefetchDataService } from './../refetch-data.service';
import { Component, Input } from '@angular/core';
import axios from 'axios';

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

  constructor(private refetch : RefetchDataService) {}

  private api_url = "http://localhost:8080/todos";
  private headers = {
    "Accept" : "application/json",
    "Content-Type" : "application/json",
  }

  unCheck() {

  }

  complete() {

  }

  toggleComplete() {

  }

  async onDelete() {
    console.log("Clicked the button");
    const req_url = "http://localhost:8080/todos/delete";

    axios.delete(req_url, {
      headers : this.headers,
      data: JSON.stringify({todoId: Number.parseInt(this.todoId)})
    }).then((res) => {
      this.refetch.triggerRefetch();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }
}

