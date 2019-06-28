import { Component } from '@angular/core';
import { EstacionamentoService } from '../service/estacionamento.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  ticket: any;

  constructor(
    public estacionamentoService: EstacionamentoService,
  ) {
    this.ticket = this.estacionamentoService.Iniciar();
  }

  GetNewToken() {
    this.ticket = this.estacionamentoService.Iniciar();
  }
}
