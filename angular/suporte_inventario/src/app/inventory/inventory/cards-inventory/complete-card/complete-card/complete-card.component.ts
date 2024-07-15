import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-complete-card',
  templateUrl: './complete-card.component.html',
  styleUrls: ['./complete-card.component.css']
})
export class CompleteCardComponent implements OnInit {

  constructor() { }

    
  mostrarDetalhesFlag: boolean = true;
  tradeImage: boolean = false;

  ngOnInit(): void {
  }

  // Define parametro no elemento

  @Output() callViewCard = new EventEmitter<void>();

  // Usa parametro para capturar evento no pai
  closeCard(): void{
    this.callViewCard.emit();
  }

  editCard():void{
    this.tradeImage = !this.tradeImage;

  }


}
