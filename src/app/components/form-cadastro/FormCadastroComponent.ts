import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  form: FormGroup = this.fb.group({});
  mensagem: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  cadastrar() {
    if (this.form.valid) {
      // TODO: Salvar os dados do usuário no banco de dados
      console.log('Usuário cadastrado com sucesso!');
      this.mensagem = `Olá, ${this.form.value.nome}, seu cadastro foi realizado com sucesso.`;
    } else {
      this.mensagem = 'Olá, informe os campos corretamente.';
    }
  }

}
