import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  description = "";
  statuses = []
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm:any) {
    if (contactForm.invalid) {
      alert("Hey beautiful user your form seems to be incomplete")
    }
    console.log(contactForm);
    
  }

  receiveData($event: any) {
    this.description = $event;    
  }

}
