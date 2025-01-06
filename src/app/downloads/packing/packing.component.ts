import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria'; 

@Component({
  selector: 'app-packing',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './packing.component.html',
  styleUrl: './packing.component.css'
})
export class PackingComponent {
  images: any[] = [];
  responsiveOptions: any[];

  constructor() {
    this.images = [
      {
        image: '/images/chemicals-packing/PSX_20241222_235143.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+1',
        alt: 'Image 1'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_235938.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+2',
        alt: 'Image 2'
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Image+3',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+3',
        alt: 'Image 3'
      },
      {
        image: 'https://via.placeholder.com/800x400?text=Image+4',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}


interface GalleriaImage { 
  URL: String; 
} 