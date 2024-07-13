import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterModule, CommonModule,
    RouterLink, RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  routes = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'frete-maritimo',
      label: 'Frete Marítimo',
    },
    {
      path: 'frete-aereo',
      label: 'Frete Aéreo',
    },
    {
      path: 'desembaraco-aduaneiro',
      label: 'Desembaraço Aduaneiro',
    },
    {
      path: 'transporte-rodoviario',
      label: 'Transporte Rodoviário'
    },
    {
      path: 'contato',
      label: 'Contato'
    }
  ]
}
