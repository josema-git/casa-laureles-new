import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { InfoComponent } from '../../components/info/info.component';
import { CollageComponent } from '../../components/collage/collage.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Importa RouterLink si el CTA lo usa

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, InfoComponent, CollageComponent], // Asegúrate que RouterLink está si es necesario
  templateUrl: './home.component.html',
})
export class HomeComponent { }