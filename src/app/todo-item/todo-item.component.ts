import { RefetchDataService } from './../refetch-data.service';
import { Component, Input } from '@angular/core';
import axios from 'axios';
import { TodoTickComponent } from "../todo-tick/todo-tick.component";

@Component({
    selector: 'app-todo-item',
    standalone: true,
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.css',
    imports: [TodoTickComponent]
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
    console.log("Clicked the button");
    const req_url = "http://localhost:8080/todos/untick";

    axios(req_url, {
      method: "POST",
      headers : this.headers,
      data: JSON.stringify({todoId: Number.parseInt(this.todoId)})
    }).then((res) => {
      this.refetch.triggerRefetch();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }

  toggleComplete() {
    const req_url =  this.completed ? `${this.api_url}/untick` : `${this.api_url}/complete`;

    axios(req_url, {
      method: "POST",
      headers : this.headers,
      data: JSON.stringify({todoId: Number.parseInt(this.todoId)})
    }).then((res) => {
      this.refetch.triggerRefetch();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    });
  }

  async onDelete() {
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

