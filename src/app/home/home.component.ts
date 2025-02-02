import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
import { NgFor } from '@angular/common';
import { CertificationComponent } from "../downloads/certification/certification.component";
import { FormsModule } from '@angular/forms';
import { WorldMapComponent } from '../world-map/world-map.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,WorldMapComponent,ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink, CertificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // products: Product[] | undefined;

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '/images/workers/chemicals.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: 'images/workers/worker1.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: 'images/workers/worker2.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }

  name: string = '';
  email: string = '';
  message: string = '';

  sendEmail(event: Event) {
    event.preventDefault(); // Prevent form submission and page reload
  
    const subject = `Inquiry from ${this.name}`;
    const body = `Hello,\n\nI would like more information about your products.\n\nMessage:\n${this.message}\n\nContact Email: ${this.email}`;
    
    // Redirect to Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sales@aarnavscientific.co.in&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank'); // Opens in a new tab
  }
  
  
}
