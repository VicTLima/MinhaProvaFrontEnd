import { Component } from '@angular/core';
import { ListItensComponent } from '../list-itens/list-itens.component';

@Component({
  selector: 'app-deletarproduto',
  templateUrl: './deletarproduto.component.html',
  styleUrls: ['./deletarproduto.component.css']
})
export class DeletarprodutoComponent {
  public id:string;
  public listItens: ListItensComponent;

  constructor() { this.id = "";this.listItens = new ListItensComponent;}

  ngOnInit() {}
  excluir():void{
    this.listItens.produtos.splice(1, 1);
    console.log(this.listItens.produtos)
  }
}
