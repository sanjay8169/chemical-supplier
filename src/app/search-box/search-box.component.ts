import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../Interfaces/Product';
import { Router } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule,InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input() options: Product[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() selected = new EventEmitter<Product>();
  constructor(private router: Router) {}
  searchText = '';
  filteredOptions: Product[] = [];
  
  onSearch() {
    if (!this.searchText.trim()) {
      // Clear filtered options when the search box is empty
      this.filteredOptions = [];
    } else {
      // Filter options based on the search text
      this.filteredOptions = this.options.filter(
        (option) =>
          option.ProductName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          option.CASNO.toLowerCase().includes(this.searchText.toLowerCase()) ||
          String(option.HSNCODE).includes(this.searchText.toLowerCase())
      );
    }
    this.search.emit(this.searchText);
  }
  

  selectOption(option: Product) {
    this.searchText = `${option.ProductName} (${option.HSNCODE})`;
    this.filteredOptions = [];
    this.selected.emit(option);

    // Navigate to a specific route with query params or dynamic segments
    this.router.navigate(['/product'], {
      queryParams: { search: option.ProductName },
    });
  }
}
