
<<<<<<< HEAD

=======
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItensComponent } from './components/list-itens/list-itens.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { AdicionarprodutoComponent } from './components/adicionarproduto/adicionarproduto.component';
import { DeletarprodutoComponent } from './components/deletarproduto/deletarproduto.component';
import { ListComponent } from './components/list/list.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItensComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    DadosAlunosComponent,
    AdicionarprodutoComponent,
    DeletarprodutoComponent,
    ListComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 97a4f4686db4b179cc53e2a163b7f1aee69e96ec
