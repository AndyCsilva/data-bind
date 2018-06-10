import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highligth {
          background-color: yellowgreen;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http:loiane.training';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://via.placeholder.com/350x150';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular 2 Loinane Traning';

  nome: string = 'abc';
  valorInicial: number = 10;

  pessoa: any = {
    nome: 'andre',
    idade: 26
  };


  getValor() {
    return 1 + 2;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('fui clicado!!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !(this.isMouseOver);
  }

  onMudouValor(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
