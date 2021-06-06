import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  description = "";
  someTableData = [
    {
      firstName: "Oliver",
      lastName: "Sedrik",
      handle: "olised"
    },
    {
      firstName: "Merilyn",
      lastName: "Kaijula",
      handle: "merkai"
    },
    {
      firstName: "Milica",
      lastName: "Gavrilov",
      handle: "milgav"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  receiveData($event: any) {
    this.description = $event;    
  }
}
