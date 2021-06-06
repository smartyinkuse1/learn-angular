import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "This is the HomePage"
  titleValue: string = "You just hovered!"
  receivedValue: string = "" 
  homeDatabaseData: any;
  tableData = [
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

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeDatabaseData =  this.homeService.getData()
  }

  doSomething(){
    console.log("I have clicked on the paragraph")
  }
  onButtonClicked() {
    alert("You clicked a button")
  }

  receiveValue($event: any) {
    this.receivedValue = $event
    
  }
}
