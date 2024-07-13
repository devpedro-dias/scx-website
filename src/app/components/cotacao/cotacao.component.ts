import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoedasService } from '../../services/moedas.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Observable, concat } from 'rxjs';
import { Moeda } from '../../interfaces/moeda';


@Component({
  selector: 'app-cotacao',
  standalone: true,
  imports: [
    HttpClientModule, CommonModule
  ],
  templateUrl: './cotacao.component.html',
  styleUrl: './cotacao.component.scss'
})
export class CotacaoComponent implements OnInit{
  moedas: Moeda[] = [];
  myDate = Date.now();
  
  constructor (private moedasService: MoedasService) { }

  ngOnInit() {
    this.getMoedasData().subscribe(
      (data) => {
        this.moedas = Object.values(data);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }
  
  getMoedasData(): Observable<{ [key: string]: Moeda }> {
    return this.moedasService.getMoedas();
  }
  
  handleError(error: any) {
    if (error.status === 404) {
      console.error('Nenhuma moeda encontrada.');
      // Exibir uma mensagem de erro amigável para o usuário
    } else {
      console.error('Erro ao obter as moedas:', error);
      // Tratar outros tipos de erros
    }
  } 
}