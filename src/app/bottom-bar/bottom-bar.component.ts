import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css',
  providers : [HttpClientModule]
  
})
export class BottomBarComponent {
  constructor(private http: HttpClient) {}

  newTodo = '';

  private api_url = "http://localhost:8080/todos";

  addTodo() {
    console.log(this.newTodo);
    this.newTodo = '';
  }

  onInput() {
    console.log("Value changed")
  }
}
