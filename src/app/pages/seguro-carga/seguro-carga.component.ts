import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContatoContentComponent } from '../../components/contato-content/contato-content.component';

@Component({
  selector: 'app-seguro-carga',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, CommonModule, FooterComponent, ContatoContentComponent
  ],
  templateUrl: './seguro-carga.component.html',
  styleUrl: './seguro-carga.component.scss'
})
export class SeguroCargaComponent {

}
