import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  certifications = [
    {
      title: 'ISO/IEC 900:2015 UASL Quality Management',
      image: 'certificates/ISO 9001-2015.jpg', // Thumbnail for the certificate
      pdf: 'certificates/ISO 9001-2015.pdf', // Link to the PDF
    },
    {
      title: 'Ministry of Micro,Small and Medium Certificate',
      image: 'certificates/MSME Certificate.jpg',
      pdf: 'certificates/MSME CERTIFICATE.pdf',
    }
  ];
}
