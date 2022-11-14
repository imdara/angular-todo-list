import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from '../todos/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteHandler(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log(todo.todo, 'deleted');
  }

  checkHandler(todo: Todo): void {
    this.todoCheck.emit(todo);
    todo.completed
      ? console.log(todo.todo, 'finished')
      : console.log(todo.todo, 'unfinished');
  }
}
