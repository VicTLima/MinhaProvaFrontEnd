import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { AdicionarprodutoComponent } from './components/adicionarproduto/adicionarproduto.component';
import { DeletarprodutoComponent } from './components/deletarproduto/deletarproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItensComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    DadosAlunosComponent,
    AdicionarprodutoComponent,
    DeletarprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
