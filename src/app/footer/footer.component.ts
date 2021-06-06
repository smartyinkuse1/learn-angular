import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() sendData = new EventEmitter()
  homeValue = ""
  constructor() { }

  ngOnInit(): void {
  }

  onSendData() {
    console.log(this.homeValue);
    this.sendData.emit(this.homeValue)
  }
 
}
