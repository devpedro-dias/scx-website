import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contato-content',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink , RouterLinkActive
  ],
  templateUrl: './contato-content.component.html',
  styleUrl: './contato-content.component.scss'
})
export class ContatoContentComponent {

}
