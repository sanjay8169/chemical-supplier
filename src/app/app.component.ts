import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { SearchBoxComponent } from '../app/search-box/search-box.component';
import { DataService } from './Services/data.service';
import { Product } from './Interfaces/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule,CommonModule,SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data  :any = [];
  constructor(private router: Router,private dataService: DataService) {
    this.data = this.dataService.getProduct();
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        route: ''
      },
      {
        label: 'Product Portfolio',
        route: '/product'
      },
      {
        label: 'About Us',
        route: '/about'
      },
      {
        label: 'Downloads',
        items: [
          {
            label: 'Catalogue',
            route: 'downloads/catalogue'
          },
          {
            separator: true
          },
          {
            label: 'Certification',
            route: 'downloads/certification'
          },
          {
            separator: true
          },
          {
            label: 'Packing',
            route: 'downloads/packing'
          }
        ]
      },

    ];
  }
  title = 'chemical-supplier';
  items: MenuItem[] | undefined;

  selectedItem: Product | null = null;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.isDropdownOpen = false;
    }
  }

  handleSearch(searchText: string) {
    console.log('Search text:', searchText);
  }

  handleSelection(selected: Product) {
    this.selectedItem = selected;
    console.log('Selected item:', selected);
  }

}
