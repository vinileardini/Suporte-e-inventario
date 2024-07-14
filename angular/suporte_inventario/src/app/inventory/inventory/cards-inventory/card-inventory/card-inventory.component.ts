import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.css']
})
export class CardInventoryComponent implements OnInit {

  constructor() { }

  
  mostrarDetalhesFlag: boolean = false;


  ngOnInit(): void {
  }

  openCard(): void{

    if(this.mostrarDetalhesFlag == false){
      this.mostrarDetalhesFlag = true;
    }
    else{
      this.mostrarDetalhesFlag = false;
    }
    
  }

  

}
