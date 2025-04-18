import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core'; // Añade OnChanges, SimpleChanges
import { CommonModule } from '@angular/common';

// Reutiliza la interfaz Photo si la exportaste desde Collage o define una aquí
interface Photo {
  src: string;
  alt: string;
  floor?: string;
  room?: string;
}

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
})
export class ImageModalComponent implements OnChanges { // Implementa OnChanges
  // --- Nuevos Inputs ---
  @Input() imageList: Photo[] = [];
  @Input() startIndex: number = 0;
  // --------------------

  @Output() close = new EventEmitter<void>();

  // Estado interno
  currentIndex: number = 0;

  // --- Lifecycle Hook para actualizar el índice cuando cambian los inputs ---
  ngOnChanges(changes: SimpleChanges): void {
    // Si el índice inicial cambia (cuando se abre el modal), actualiza el índice interno
    if (changes['startIndex']) {
      this.currentIndex = this.startIndex;
    }
    // También podrías resetear si cambia imageList, aunque es menos probable en este flujo
    if (changes['imageList'] && this.imageList.length === 0) {
       this.currentIndex = 0;
    } else if (changes['imageList'] && this.startIndex >= this.imageList.length) {
       // Ajustar si el índice inicial queda fuera de rango (raro)
       this.currentIndex = 0;
    }
  }
  // --------------------------------------------------------------------

  // --- Getters para la imagen actual ---
  get currentImage(): Photo | null {
    if (!this.imageList || this.imageList.length === 0) return null;
    // Asegurarse que el índice es válido
    const safeIndex = Math.max(0, Math.min(this.currentIndex, this.imageList.length - 1));
    return this.imageList[safeIndex];
  }
  get currentImageUrl(): string | null {
    return this.currentImage?.src ?? null;
  }
  get currentImageAlt(): string {
    return this.currentImage?.alt ?? '';
  }
  // ----------------------------------

  // --- Métodos de Navegación ---
  goToNext(): void {
    if (this.imageList.length > 1) {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
    }
  }

  goToPrevious(): void {
    if (this.imageList.length > 1) {
      this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
    }
  }
  // ----------------------------

  // --- Listeners de Teclado ---
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeModal();
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  onLeftArrow(event: KeyboardEvent): void {
    event.preventDefault(); // Evita que el navegador navegue hacia atrás
    this.goToPrevious();
  }

  @HostListener('document:keydown.arrowright', ['$event'])
  onRightArrow(event: KeyboardEvent): void {
    event.preventDefault(); // Evita que el navegador navegue hacia adelante
    this.goToNext();
  }
  // ---------------------------

  // --- Manejo de Clics ---
  closeModal() {
    this.close.emit();
  }
  onBackdropClick() {
    this.closeModal();
  }
  // Detiene la propagación para evitar cerrar el modal al interactuar con controles internos
  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
  // -----------------------
}