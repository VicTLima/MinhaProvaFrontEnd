import { Component } from '@angular/core';
import { ListItensComponent } from '../list-itens/list-itens.component';

@Component({
  selector: 'app-adicionarproduto',
  templateUrl: './adicionarproduto.component.html',
  styleUrls: ['./adicionarproduto.component.css']
})
export class AdicionarprodutoComponent {
  public id:string;
  public nome:string;
  public serie:string;
  public valor:string;
  public listItens: ListItensComponent;
  constructor() { this.id = "";this.nome = "";this.serie = "";this.valor = ""; this.listItens = new ListItensComponent; }

  ngOnInit() { }

  cadastrar():void{ 
    this.listItens.produtos.push({id:this.id,nome:this.nome,serie:this.serie,valor:this.valor})
    console.log(this.listItens.produtos);
  }

}
