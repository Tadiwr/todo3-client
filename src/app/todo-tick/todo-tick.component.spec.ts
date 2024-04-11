import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTickComponent } from './todo-tick.component';

describe('TodoTickComponent', () => {
  let component: TodoTickComponent;
  let fixture: ComponentFixture<TodoTickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
