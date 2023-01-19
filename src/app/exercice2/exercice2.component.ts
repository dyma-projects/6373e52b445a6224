import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myInput') public element:ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit() {
  }
  
  change(){
    this.valeur=this.element.nativeElement.value
  }
}
