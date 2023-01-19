import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
 @Input() public count:number
 @Output() private eventCount:EventEmitter<number>=new EventEmitter()
 
  constructor() { }

  ngOnInit() {
  }

  increase(){
    this.count++
    this.eventCount.emit(this.count)
  }
  decrease(){
    this.count--
    this.eventCount.emit(this.count)
  }
}
