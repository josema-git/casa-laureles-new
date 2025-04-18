import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappIconComponent } from './components/whatsapp-icon/whatsapp-icon.component';
import AOS from 'aos';
import { ContactDetails } from './components/contact-info-card/contact-info-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, WhatsappIconComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  contactInfo: ContactDetails = {
    phone: '573006104153', // Reemplaza si es necesario
    phoneFormatted: '+57 300 610 4153', // Reemplaza si es necesario
    address: 'Dirección Principal, Medellín',
    email: 'correo@ejemplo.com'
  };

  isHeaderHidden: boolean = false;
  lastScrollY: number = 0;
  readonly scrollThreshold: number = 10;
  readonly initialOffset: number = 200;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 700,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
      });
      this.lastScrollY = window.scrollY;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - this.lastScrollY;

    if (currentScrollY < this.initialOffset) {
      this.isHeaderHidden = false;
    } else if (Math.abs(scrollDifference) > this.scrollThreshold) {
      this.isHeaderHidden = scrollDifference > 0;
    }
    this.lastScrollY = currentScrollY;
  }
}