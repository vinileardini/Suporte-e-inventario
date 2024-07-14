import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-complete-card',
  templateUrl: './complete-card.component.html',
  styleUrls: ['./complete-card.component.css']
})
export class CompleteCardComponent implements OnInit {

  constructor() { }

    
  mostrarDetalhesFlag: boolean = true;

  ngOnInit(): void {
  }

 
  closeCard(): void{

    if(this.mostrarDetalhesFlag == false){
      this.mostrarDetalhesFlag = true;
    }
    else{
      this.mostrarDetalhesFlag = false;
    }
    
  }


}
