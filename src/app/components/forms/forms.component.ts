import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, MensagemComponent
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'SCX Agenciamentos Marítimos',
    from_email: new FormControl('', [Validators.required, Validators.email]),
    subject: '',
    message: '',
  });

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {}

  async send() {
    if (this.form.invalid) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      this.successMessage = '';
      return;
    }

    try {
      emailjs.init('karuWFipG8IPAsKIS');
      let response = await emailjs.send("service_v772krs","template_ufdwhh9", {
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message
      });

      this.successMessage = 'Mensagem enviada com sucesso!';
      this.errorMessage = '';
      this.form.reset();
    } catch (error) {
      this.errorMessage = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.';
      this.successMessage = '';
    }
  }
}


