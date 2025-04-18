import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModalComponent } from '../image-modal/image-modal.component';

interface Photo {
  src: string;
  alt: string;
  floor?: string;
  room?: string;
}

@Component({
  selector: 'app-collage',
  standalone: true,
  imports: [CommonModule, ImageModalComponent],
  templateUrl: './collage.component.html',
})
export class CollageComponent implements OnInit {
  // --- Propiedades para el modal ---
  showModal: boolean = false; // Usaremos esto para mostrar/ocultar el modal
  currentModalPhotos: Photo[] = [];
  currentModalStartIndex: number = 0;
  // --------------------------------

  // Array original completo (definido manualmente)

  readonly allPhotos: Photo[] = [
    // Exterior
    { src: 'Exterior/Entrada/1.jpg', alt: 'Entrada - Foto 1 (Exterior)', floor: 'Exterior', room: 'Entrada' },
    { src: 'Exterior/Entrada/2.jpg', alt: 'Entrada - Foto 2 (Exterior)', floor: 'Exterior', room: 'Entrada' },
    { src: 'Exterior/Entrada/3.jpg', alt: 'Entrada - Foto 3 (Exterior)', floor: 'Exterior', room: 'Entrada' },

    // Primer Piso
    { src: 'Primer Piso/Bano1/1.jpg', alt: 'Bano1 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Bano1' },
    { src: 'Primer Piso/Bano1/2.jpg', alt: 'Bano1 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Bano1' },
    { src: 'Primer Piso/Cocina1/1.jpg', alt: 'Cocina1 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Cocina1' },
    { src: 'Primer Piso/Cocina1/2.jpg', alt: 'Cocina1 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Cocina1' },
    { src: 'Primer Piso/Escaleras/1.jpg', alt: 'Escaleras - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Escaleras' },
    { src: 'Primer Piso/Escaleras/2.jpg', alt: 'Escaleras - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Escaleras' },
    { src: 'Primer Piso/Habitacion1/1.jpg', alt: 'Habitacion1 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Habitacion1' },
    { src: 'Primer Piso/Habitacion1/2.jpg', alt: 'Habitacion1 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Habitacion1' },
    { src: 'Primer Piso/Habitacion2/1.jpg', alt: 'Habitacion2 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Habitacion2' },
    { src: 'Primer Piso/Habitacion2/2.jpg', alt: 'Habitacion2 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Habitacion2' },
    { src: 'Primer Piso/Habitacion3/1.jpg', alt: 'Habitacion3 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Habitacion3' },
    { src: 'Primer Piso/HabitacionDeServicio1/1.jpg', alt: 'HabitacionDeServicio1 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'HabitacionDeServicio1' },
    { src: 'Primer Piso/HabitacionDeServicio2/1.jpg', alt: 'HabitacionDeServicio2 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'HabitacionDeServicio2' },
    { src: 'Primer Piso/Pasillo/1.jpg', alt: 'Pasillo - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Pasillo' },
    { src: 'Primer Piso/Pasillo/2.jpg', alt: 'Pasillo - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Pasillo' },
    { src: 'Primer Piso/Patio/1.jpg', alt: 'Patio - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Patio' },
    { src: 'Primer Piso/Patio/2.jpg', alt: 'Patio - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Patio' },
    { src: 'Primer Piso/Patio/3.jpg', alt: 'Patio - Foto 3 (Primer Piso)', floor: 'Primer Piso', room: 'Patio' },
    { src: 'Primer Piso/Sala1/1.jpg', alt: 'Sala1 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Sala1' },
    { src: 'Primer Piso/Sala1/2.jpg', alt: 'Sala1 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Sala1' },
    { src: 'Primer Piso/Sala2/1.jpg', alt: 'Sala2 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Sala2' },
    { src: 'Primer Piso/Sala3/1.jpg', alt: 'Sala3 - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Sala3' },
    { src: 'Primer Piso/Sala3/2.jpg', alt: 'Sala3 - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Sala3' },
    { src: 'Primer Piso/Solar/1.jpg', alt: 'Solar - Foto 1 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },
    { src: 'Primer Piso/Solar/2.jpg', alt: 'Solar - Foto 2 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },
    { src: 'Primer Piso/Solar/3.jpg', alt: 'Solar - Foto 3 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },
    { src: 'Primer Piso/Solar/4.jpg', alt: 'Solar - Foto 4 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },
    { src: 'Primer Piso/Solar/5.jpg', alt: 'Solar - Foto 5 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },
    { src: 'Primer Piso/Solar/6.jpg', alt: 'Solar - Foto 6 (Primer Piso)', floor: 'Primer Piso', room: 'Solar' },

    // Segundo Piso
    { src: 'Segundo Piso/Bano1/1.jpg', alt: 'Bano1 - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Bano1' },
    { src: 'Segundo Piso/Bano1/2.jpg', alt: 'Bano1 - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Bano1' },
    { src: 'Segundo Piso/Cocina/1.jpg', alt: 'Cocina - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Cocina' },
    { src: 'Segundo Piso/Cocina/2.jpg', alt: 'Cocina - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Cocina' },
    { src: 'Segundo Piso/Habitacion1/1.jpg', alt: 'Habitacion1 - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Habitacion1' },
    { src: 'Segundo Piso/Habitacion1/2.jpg', alt: 'Habitacion1 - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Habitacion1' },
    { src: 'Segundo Piso/Habitacion2/1.jpg', alt: 'Habitacion2 - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Habitacion2' },
    { src: 'Segundo Piso/Habitacion2/2.jpg', alt: 'Habitacion2 - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Habitacion2' },
    { src: 'Segundo Piso/Balcon/1.jpg', alt: 'Balcon - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Balcon/2.jpg', alt: 'Balcon - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Balcon/3.jpg', alt: 'Balcon - Foto 3 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Balcon/4.jpg', alt: 'Balcon - Foto 4 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Balcon/5.jpg', alt: 'Balcon - Foto 5 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Balcon/6.jpg', alt: 'Balcon - Foto 6 (Segundo Piso)', floor: 'Segundo Piso', room: 'Balcon' },
    { src: 'Segundo Piso/Pasillo/1.jpg', alt: 'Pasillo - Foto 1 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/2.jpg', alt: 'Pasillo - Foto 2 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/3.jpg', alt: 'Pasillo - Foto 3 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/4.jpg', alt: 'Pasillo - Foto 4 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/5.jpg', alt: 'Pasillo - Foto 5 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/6.jpg', alt: 'Pasillo - Foto 6 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/7.jpg', alt: 'Pasillo - Foto 7 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/8.jpg', alt: 'Pasillo - Foto 8 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/9.jpg', alt: 'Pasillo - Foto 9 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/10.jpg', alt: 'Pasillo - Foto 10 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/11.jpg', alt: 'Pasillo - Foto 11 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/12.jpg', alt: 'Pasillo - Foto 12 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },
    { src: 'Segundo Piso/Pasillo/13.jpg', alt: 'Pasillo - Foto 13 (Segundo Piso)', floor: 'Segundo Piso', room: 'Pasillo' },

    // Añade más fotos aquí si es necesario, siguiendo el patrón
  ];

  // Estado de los filtros
  availableFloors: string[] = [];
  availableRooms: string[] = [];
  selectedFloor: string | null = null;
  selectedRoom: string | null = null;
  filteredPhotos: Photo[] = []; // Array que se muestra en la galería

  ngOnInit(): void {
    this.filteredPhotos = [...this.allPhotos];
    const floors = new Set(this.allPhotos.map(p => p.floor).filter(f => !!f) as string[]);
    this.availableFloors = ['Todos', ...floors];
    this.availableRooms = [];
  }

  filterByFloor(floor: string | null): void {
    this.selectedFloor = floor;
    this.selectedRoom = null;
    if (floor && floor !== 'Todos') {
      const rooms = new Set(this.allPhotos.filter(p => p.floor === floor && p.room).map(p => p.room!));
      this.availableRooms = ['Todas', ...rooms];
    } else {
      this.availableRooms = [];
    }
    this.applyFilters();
  }

  filterByRoom(room: string | null): void {
    this.selectedRoom = room;
    this.applyFilters();
  }

  applyFilters(): void {
    let photosToShow = [...this.allPhotos];
    if (this.selectedFloor && this.selectedFloor !== 'Todos') {
      photosToShow = photosToShow.filter(p => p.floor === this.selectedFloor);
      if (this.selectedRoom && this.selectedRoom !== 'Todas') {
        photosToShow = photosToShow.filter(p => p.room === this.selectedRoom);
      }
    }
    this.filteredPhotos = photosToShow;
  }

  // --- Métodos del modal actualizados ---
  openImageModal(clickedPhoto: Photo): void {
    // Encuentra el índice de la foto clickeada DENTRO DE LA LISTA FILTRADA ACTUAL
    const index = this.filteredPhotos.findIndex(p => p.src === clickedPhoto.src);
    if (index > -1) { // Asegurarse que se encontró
      this.currentModalPhotos = [...this.filteredPhotos]; // Pasa la lista filtrada actual
      this.currentModalStartIndex = index;             // Pasa el índice inicial
      this.showModal = true;                          // Abre el modal
      if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
    } else {
        console.error("No se pudo encontrar la imagen clickeada en la lista filtrada.");
    }
  }

  closeImageModal(): void {
    this.showModal = false; // Cierra el modal
    this.currentModalPhotos = []; // Limpia la lista
    this.currentModalStartIndex = 0;
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  }
  // ------------------------------------
}