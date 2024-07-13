import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CotacaoComponent } from '../../components/cotacao/cotacao.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, RouterLinkActive, FooterComponent, CotacaoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
