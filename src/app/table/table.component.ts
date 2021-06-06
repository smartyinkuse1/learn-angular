import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: any[] = []; 
  datafromBackend: any[] =[]
  constructor() {
    
  }
  ngOnChanges(e: SimpleChanges): void {
    console.log(e);
    //Make some changes whenever there's a change to data in the @Input decorator
    
  }
  
  ngOnInit(): void {
    //perform some Database activities
    let resultFromDatabaseAct = ["Hello", "World"]
    this.datafromBackend = resultFromDatabaseAct
    console.log(this.data, "Input from Parent Component");
    console.log(this.datafromBackend, "Database");
  }

  ngOnDestroy() {
    //Make some changes or manipulation whenever we finish from a component 
    console.log("I am leaving The component");
    
  }

}
