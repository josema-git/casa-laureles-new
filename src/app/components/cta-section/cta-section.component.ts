import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-section.component.html',
})
export class CtaSectionComponent {
  @Input() title: string = '¿Listo para Dar el Siguiente Paso?';
  @Input() text: string = 'Contáctanos hoy mismo.';
  @Input() buttonText: string = 'Contactar Ahora';
  @Input() buttonLink: string | null = null;
  @Input() linkType: 'router' | 'tel' | 'external' = 'router';

  isRouterLink(): boolean {
    return this.linkType === 'router' && !!this.buttonLink;
  }

  isTelLink(): boolean {
    return this.linkType === 'tel' && !!this.buttonLink;
  }

   isExternalLink(): boolean {
    return this.linkType === 'external' && !!this.buttonLink;
   }
}