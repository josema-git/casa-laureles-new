import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetails } from '../contact-info-card/contact-info-card.component'; // Asegúrate que la interfaz se exporta

@Component({
  selector: 'app-whatsapp-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-icon.component.html',
})
export class WhatsappIconComponent {
    @Input() contactInfo: ContactDetails | null = null;
}