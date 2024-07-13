import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContatoContentComponent } from '../../components/contato-content/contato-content.component';

@Component({
  selector: 'app-frete-aereo',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, CommonModule, FooterComponent, ContatoContentComponent
  ],
  templateUrl: './frete-aereo.component.html',
  styleUrl: './frete-aereo.component.scss'
})
export class FreteAereoComponent {

}
