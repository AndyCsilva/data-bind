import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valor: number = 5;
  destruir: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCliclo() {
    this.destruir = !this.destruir;
  }
}
