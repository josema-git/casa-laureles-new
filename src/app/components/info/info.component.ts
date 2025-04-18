import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  propertyDetails = {
    location: 'Barrio Laureles - Medellín',
    type: 'Propiedad Casa- Lote',
    totalArea: '424 m²',
    builtArea: '331 m² (Casa de 2 pisos)',
    front: '10,9 metros',
    depth: '44,05 metros',
    stratum: 5,
    address: 'Diagonal 75A # 34 A 44',
    rooms: 5,
    bathrooms: 3,
    diningRooms: 2,
    utilityRooms: 4,
    livingRooms: 3,
    externalBalcony: 1,
    frontGarden: 1,
    patio: 'Patio con fuente y jardín',
    backyard: 'Solar con árboles',
    constructionPermit: 'Permiso para construir 12 pisos (altura base 10, acceso mediante compra de derechos)',
    urbanisticNorm: 'C1 (Área de baja mixtura)',
    polygon: 'Z4_CN4_12 (Según Ficha Normativa Anexo 5 del presente Acuerdo)',
  };

  internalFeatures = [
    { count: 5, name: 'Habitaciones' },
    { count: 3, name: 'Baños' },
    { count: 2, name: 'Comedores' },
    { count: 4, name: 'Cuartos útiles' },
    { count: 3, name: 'Salas' },
    { count: 1, name: 'Balcón externo' },
    { count: 1, name: 'Antejardín' },
    { count: 1, name: 'Patio con fuente y jardín' },
    { count: 1, name: 'Solar con árboles' },
  ];

   generalDataItems = [
      { label: 'Tipo', value: this.propertyDetails.type },
      { label: 'Ubicación', value: this.propertyDetails.location },
      { label: 'Dirección', value: this.propertyDetails.address },
      { label: 'Área Total', value: this.propertyDetails.totalArea },
      { label: 'Área Construida', value: this.propertyDetails.builtArea },
      { label: 'Frente', value: this.propertyDetails.front },
      { label: 'Fondo', value: this.propertyDetails.depth },
      { label: 'Estrato', value: this.propertyDetails.stratum }
    ];

   potentialItems = [
        { label: 'Permiso Construcción', value: this.propertyDetails.constructionPermit },
        { label: 'Norma Urbanística', value: this.propertyDetails.urbanisticNorm },
        { label: 'Polígono Normativo', value: this.propertyDetails.polygon }
    ];
}