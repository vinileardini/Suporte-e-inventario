import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  mostrarDetalhesFlag: boolean = false;

  ngOnInit(): void {
  }

  openCard(): void{
    this.mostrarDetalhesFlag = true;
  }

}
