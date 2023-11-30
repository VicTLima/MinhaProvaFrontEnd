import { Component } from '@angular/core';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent {
  produtos = [
    {
      id:1,
      nome:'Smartphone',
      serie:'07953766426',
      valor: '1.500R$'
    },
    {
      id:2,
      nome:'Notebook',
      serie:'08564746624',
      valor: '3.500R$'
    },
    {
      id:3,
      nome:'Console de Jogos',
      serie:'083455654524',
      valor: '4.000R$'
    },
    {
      id:4,
      nome:'SmartWatch',
      serie:'43526789247',
      valor: '5.500R$'
    },
    {
      id:5,
      nome:'Phone de ouvido',
      serie:'0887655456624',
      valor: '3.500R$'
    },
    {
      id:6,
      nome:'Air Fryers',
      serie:'467519825486',
      valor: '500R$'
    },
    {
      id:7,
      nome:'TV Led 50',
      serie:'86708568944',
      valor: '13.000R$'
    }
  ]
}
