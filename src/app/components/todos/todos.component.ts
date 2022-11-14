import { Component, OnInit } from '@angular/core';
import Todo from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      { sno: 1, todo: 'todo1', completed: true },
      { sno: 2, todo: 'todo2', completed: true },
      { sno: 3, todo: 'todo3', completed: false },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((item) => item.sno !== todo.sno);
  }

  addTodo(todo: Todo): void {
    this.todos.push({ ...todo, sno: this.todos.length + 1 });
  }

  checkTodo(todo: Todo): void {
    todo.completed = !todo.completed;
  }
}
