import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/interfaces/interfaces';
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
    {
      id: '3',
      name: 'Internet',
      valor: 'R$ 79.90',
      data: '25/05/2022',
      acoes: 'Deletar',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.totalValor();
  }

  addDividas(event: Event) {
    event.preventDefault();
    this.tablesData.push({
      id: '4',
      name: 'Remedios',
      valor: 'R$ 250',
      data: '30/05/2022',
      acoes: 'Deletar',
    });
    this.totalValor();
  }

  totalValor(): number {
    let total = 0;
    this.tablesData.forEach((data) => {
      total += parseFloat(data.valor.replace('R$ ', ''));
    });
    return total;
  }
}
