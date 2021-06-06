import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoText: string = "Olayinka"
  isLoggedIn: boolean = false;
  x = 10
  constructor() { }

  ngOnInit(): void {
  }

}
