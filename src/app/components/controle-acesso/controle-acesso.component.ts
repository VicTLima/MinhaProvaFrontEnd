import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.css']
})
export class ControleAcessoComponent {

  show1: boolean = false;

  showMessage1(): void {
    this.show1 = !this.show1; //toggle -> reversão dos valores com mesmo evento. 
  }


  show2: boolean = false;

  showMessage2(): void {
    this.show2 = !this.show2; //toggle -> reversão dos valores com mesmo evento. 
  }

  show3: boolean = false;

  showMessage3(): void {
    this.show3 = !this.show3; //toggle -> reversão dos valores com mesmo evento. 
  }
}
