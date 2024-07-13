import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContatoComponent } from '../contato/contato.component';
import { ContatoContentComponent } from '../../components/contato-content/contato-content.component';

@Component({
  selector: 'app-frete-maritimo',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, CommonModule, FooterComponent, ContatoContentComponent
  ],
  templateUrl: './frete-maritimo.component.html',
  styleUrl: './frete-maritimo.component.scss'
})
export class FreteMaritimoComponent {

}
