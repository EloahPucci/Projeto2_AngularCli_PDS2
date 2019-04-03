import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { collectAndResolveStyles } from '@angular/core/src/animation/animation_style_util';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor() { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = [{
      'codigo': 1,
      'nome': 'Carlos',
      'cargo': 'Professor',
      'endereco': 'Rua Teste, 65 - Jardim das Palmeiras',
      'cidade': 'Uberlândia',
      'cep': '38400-000',
      'pais': 'Brasil',
      'telefone': '(34) 99444-2342',
      'fax': '(34) 3212-1521'
    },
    {
      'codigo': 2,
      'nome': 'Martin Fowler',
      'cargo': 'CEO',
      'endereco': 'Rua das Flores, 456 - Jardim das Palmeiras',
      'cidade': 'Uberlândia',
      'cep': '38400-000',
      'pais': 'Brasil',
      'telefone': '(34) 99136-1102',
      'fax': '(34) 3233-1430'
    }]
  }

}
