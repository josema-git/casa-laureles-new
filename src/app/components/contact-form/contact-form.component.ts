import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  submitStatus: 'success' | 'error' | null = null;

  private emailJsPublicKey = environment.emailJsPublicKey;
  private emailJsServiceID = environment.emailJsServiceID;
  private emailJsTemplateID = environment.emailJsTemplateID;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      console.warn('Intento de envío con formulario inválido.');
      return;
    }

    this.isLoading = true;
    this.submitStatus = null;
    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone || 'No proporcionado',
      message: this.contactForm.value.message
    };

    try {
      console.log('Enviando correo con parámetros:', templateParams);
      await emailjs.send(
        this.emailJsServiceID,
        this.emailJsTemplateID,
        templateParams,
        this.emailJsPublicKey
      );
      console.log('SUCCESS! Correo enviado.');
      this.submitStatus = 'success';
      this.contactForm.reset();
    } catch (error) {
      console.error('FAILED...', error);
      this.submitStatus = 'error';
    } finally {
      this.isLoading = false;
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}