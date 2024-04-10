import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, map } from 'rxjs';
import { RefetchDataService } from '../refetch-data.service';
import axios from 'axios';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css',
  providers : [HttpClientModule]
  
})
export class BottomBarComponent {
  constructor(private http: HttpClient, private refetch : RefetchDataService) {}

  newTodo = '';
  message = "Add Todo";

  private api_url = "http://localhost:8080/todos";

  addTodo() {
    this.message = "Please Wait..."

    axios(`${this.api_url}/add`, {
      data : JSON.stringify({title: this.newTodo}),
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      }
    })
    .then((res) => {
      this.refetch.triggerRefetch();
      this.message = "Add Todo";
    })
    .catch((e) => {
      console.log(e);
      this.message = "Try again"
    });
  }

  onInput() {
    console.log("Value changed")
  }
}
