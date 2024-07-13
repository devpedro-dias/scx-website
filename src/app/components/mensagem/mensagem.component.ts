import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.scss'
})
export class MensagemComponent {
  @Input() mensagem = '';
  constructor() { }

  ngOnInit(): void {
  }

}
