import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoCardComponent, ContactDetails } from '../../components/contact-info-card/contact-info-card.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ContactInfoCardComponent,
    ContactFormComponent,
    CtaSectionComponent
  ],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {

  contactInfo: ContactDetails = {
    phone: '573006104153', // Reemplaza si es necesario
    phoneFormatted: '+57 300 610 4153', // Reemplaza si es necesario
    address: 'Diagonal 75A # 34 A 44, Medellín', // Reemplaza si es necesario
    email: 'propiedades.laureles@gmail.com' // Reemplaza si es necesario
  };

  constructor() {}
}