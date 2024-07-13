import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../interfaces/moeda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})

export class MoedasService {
  url_API = 'https://economia.awesomeapi.com.br/';

  constructor(private httpClient: HttpClient) {}

  getMoedas(): Observable<{ [key: string]: Moeda }> {
    return this.httpClient.get<{ [key: string]: Moeda }>(`${this.url_API}last/USD-BRL,EUR-BRL`);
  }
}


