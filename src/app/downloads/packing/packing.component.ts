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
        image: 'images/chemicals-packing/20241123_120341.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+3',
        alt: 'Image 3'
      },
      {
        image: 'images/chemicals-packing/20241222_194423.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_194649.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_221211.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_221809.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_223044.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_223412.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_223539.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241222_235721.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/20241223_191359.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_202414.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_232833.png',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_233920.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_234309.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_234621.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_234715.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_234748.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_234948.jpg',
        thumbnail: 'https://via.placeholder.com/100x50?text=Image+4',
        alt: 'Image 4'
      },
      {
        image: 'images/chemicals-packing/PSX_20241222_235040.jpg',
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