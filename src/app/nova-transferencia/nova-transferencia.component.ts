import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  valor:number = 100;
  destino:number = 100;

  constructor() {}

  ngOnInit(): void {}
  novatransferencia() {
    console.log('Nova transferencia Realizada');
    console.log('Valor:',this.valor);
    console.log('Destino:',this.destino);
  }
}
