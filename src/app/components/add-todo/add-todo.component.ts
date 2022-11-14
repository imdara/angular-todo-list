import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import Todo from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  todoItem!: string;
  constructor() {}

  ngOnInit(): void {}

  addHandler(): void {
    const todo: Todo = { sno: 1, todo: this.todoItem, completed: false };
    this.todoAdd.emit(todo);
    console.log(todo.todo, 'added');
  }
}
