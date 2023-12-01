import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routes';
import { AppComponent } from './AppComponent';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import { FormCadastroComponent } from './components/form-cadastro/FormCadastroComponent';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItensComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    DadosAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
