import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <h2>Atividade01</h2>
    <app-contador-component></app-contador-component>
    <h2>Atividade02</h2>
    <app-list-itens></app-list-itens>
    <h2>Atividade03</h2>

    <h2>Atividade04</h2>

    <h2>Atividade05</h2>

    <h2>Atividade06</h2>

    <h2>Atividade07</h2>
    
    <h2>Atividade08</h2>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'MinhaProvaFrontEnd';
}
