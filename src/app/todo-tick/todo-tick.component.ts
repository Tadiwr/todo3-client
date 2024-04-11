import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-tick',
  standalone: true,
  imports: [],
  templateUrl: './todo-tick.component.html',
  styleUrl: './todo-tick.component.css'
})
export class TodoTickComponent {
  @Input() checked : string = "false";
}
