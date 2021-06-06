import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  data: {name: string, age: number}[] = [
    {name: "Babo", age: 15},
    {name: "Loly", age: 12}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
