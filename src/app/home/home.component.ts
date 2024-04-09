import { Component } from '@angular/core';
import { TodoListViewComponent } from "../todo-list-view/todo-list-view.component";
import { BottomBarComponent } from "../bottom-bar/bottom-bar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TodoListViewComponent, BottomBarComponent]
})
export class HomeComponent {

}
