import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsComponent } from '../../components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage, RouterModule, RouterLink, FormsComponent,
    ReactiveFormsModule, CommonModule, FooterComponent
    
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

}
