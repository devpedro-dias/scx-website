import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContatoContentComponent } from '../../components/contato-content/contato-content.component';

@Component({
  selector: 'app-desembaraco',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, CommonModule, FooterComponent, ContatoContentComponent
  ],
  templateUrl: './desembaraco.component.html',
  styleUrl: './desembaraco.component.scss'
})
export class DesembaracoComponent {

}
