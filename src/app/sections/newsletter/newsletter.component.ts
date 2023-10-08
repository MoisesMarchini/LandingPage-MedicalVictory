import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.warn('Insira um email válido');
      return;
    }
    
    console.log('Enviando email para: ' + form.value.email);
  }
}
