import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "This is the HomePage"
  titleValue: string = "You just hovered!"
  constructor() { }
  tableData  = [
    {
      firstName: "Olayinka",
      lastName: "Famutimi",
      handle: "smartyinkuse"
    },
    {
      firstName: "Brad",
      lastName: "Traversy",
      handle: "bradtrav"
    },
    {
      firstName: "John",
      lastName: "Doe",
      handle: "doeman"
    }
  ]

  ngOnInit(): void {
  }

  doSomething(){
    console.log("I have clicked on the paragraph")
  }
  onButtonClicked() {
    alert("You clicked a button")
  }
}
