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
  })

  constructor(
    private fb: FormBuilder,
  ) {}
  
  async send() {  
    emailjs.init('karuWFipG8IPAsKIS')
    let response = await emailjs.send("service_v772krs","template_ufdwhh9",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message
      });


      this.form.reset();
  }


}

