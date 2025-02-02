import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  standalone : true,
  selector: 'app-world-map',
  template: `
    <div class="world-map-container">
      <h2 class="text-center text-2xl font-bold mb-4">Our Global Network</h2>
      <div id="map" style="height: 500px; width: 100%; border-radius: 10px;"></div>
    </div>
  `,
  styles: [
    `
      .world-map-container {
        margin: 20px auto;
        text-align: center;
      }
    `
  ]
})
export class WorldMapComponent implements OnInit {
  private map!: L.Map;

  private continentLocations: { name: string; coordinates: [number, number] }[] = [
    // North America
    { name: 'New York City, USA', coordinates: [40.7128, -74.006] },
    { name: 'Los Angeles, USA', coordinates: [34.0522, -118.2437] },
    { name: 'Toronto, Canada', coordinates: [43.6532, -79.3832] },
    { name: 'Mexico City, Mexico', coordinates: [19.4326, -99.1332] },
  
    // South America
    { name: 'São Paulo, Brazil', coordinates: [-23.5505, -46.6333] },
    { name: 'Buenos Aires, Argentina', coordinates: [-34.6037, -58.3816] },
    { name: 'Lima, Peru', coordinates: [-12.0464, -77.0428] },
    { name: 'Bogotá, Colombia', coordinates: [4.7110, -74.0721] },
  
    // Europe
    { name: 'Paris, France', coordinates: [48.8566, 2.3522] },
    { name: 'London, UK', coordinates: [51.5074, -0.1278] },
    { name: 'Berlin, Germany', coordinates: [52.5200, 13.4050] },
    { name: 'Rome, Italy', coordinates: [41.9028, 12.4964] },
  
    // Africa
    { name: 'Nairobi, Kenya', coordinates: [-1.2921, 36.8219] },
    { name: 'Cairo, Egypt', coordinates: [30.0444, 31.2357] },
    { name: 'Cape Town, South Africa', coordinates: [-33.9249, 18.4241] },
    { name: 'Lagos, Nigeria', coordinates: [6.5244, 3.3792] },
  
    // Asia
    { name: 'Tokyo, Japan', coordinates: [35.6895, 139.6917] },
    { name: 'Beijing, China', coordinates: [39.9042, 116.4074] },
    { name: 'Mumbai, India', coordinates: [19.0760, 72.8777] },
    { name: 'Dubai, UAE', coordinates: [25.2769, 55.2962] },
  
    // Australia
    { name: 'Sydney, Australia', coordinates: [-33.8688, 151.2093] },
    { name: 'Melbourne, Australia', coordinates: [-37.8136, 144.9631] },
    { name: 'Auckland, New Zealand', coordinates: [-36.8485, 174.7633] },
  
    // Antarctica
    { name: 'McMurdo Station', coordinates: [-77.8463, 166.6683] },
    { name: 'Amundsen-Scott South Pole Station', coordinates: [-90, 0] },
  ];
  

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    this.addMarkers();
  }

  private addMarkers(): void {
    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
    });

    this.continentLocations.forEach(location => {
      L.marker(location.coordinates, { icon: markerIcon })
        .addTo(this.map)
        .bindPopup(`<strong>${location.name}</strong><br>Our network is strong here!`);
    });
  }
}
