
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() paragraphs; // input takes in exposed vars from the parent
  @Output() event = new EventEmitter(); // output exposes vars to the parent
  
  constructor() { }

  ngOnInit() {
  }

  callParent() {
    this.event.emit();
  }

}
