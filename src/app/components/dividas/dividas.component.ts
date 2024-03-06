import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/interfaces';
@Component({
  selector: 'app-dividas',
  templateUrl: './dividas.component.html',
  styleUrls: ['./dividas.component.css'],
})
export class DividasComponent implements OnInit {
  tables: string[] = ['ID', 'Nome', 'Valor', 'Data', 'Ações'];

  tablesData: Tables[] = [
    {
      id: '1',
      name: 'Nubank',
      valor: 'R$ 2500',
      data: '25/05/2022',
      acoes: 'Deletar',
    },
    {
      id: '2',
      name: 'Luz',
      valor: 'R$ 79.90',
      data: '25/05/2022',
      acoes: 'Deletar',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}