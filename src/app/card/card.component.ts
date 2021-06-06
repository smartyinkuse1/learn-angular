import { Component, OnInit } from '@angular/core';
import { Card } from './card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  apiData: Card[] = [ 
  {
      title: "Butterfly",
      description: "I am a butterfly",
      img: "assets/butterfly.jpg",
      dateOfBirth: new Date("2020-04-25"),
      price : 1000
  },
  {
    title: "Cat",
    description: "This is a cute cat",
    img: "assets/cat.jpg",
    dateOfBirth: new Date("2019-03-24"),
    price: 1200
  },
  {
    title: "Horse",
    description: "This Horse is wearing a suit",
    img: "assets/horse.jpg",
    dateOfBirth: new Date("2018-02-23"),
    price: 1500
  }
]

  names = [ "Karl", "Milica", "Helio", "Tanel", "Linda"]
  constructor() { }

  ngOnInit(): void {
  }

}
