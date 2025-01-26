import { Component,Input,OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableModule,Table } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DataService } from '../Services/data.service';
import { Product } from '../Interfaces/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,TableModule,InputIconModule, IconFieldModule, InputTextModule,PaginatorModule],
  templateUrl: './product.component.html',
   styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() options: Product[] = [];
  
    loading: any = {
        list: true,
        details: false
      };
    filteredLocationList: any;

    jsonData : Product[] = [];

constructor(private dataService: DataService,private route: ActivatedRoute){
  this.jsonData = this.dataService.getProduct();

  this.filteredLocationList = this.jsonData


  this.route.queryParams.subscribe((params) => {
    if(params['search'] != null){
      this.filteredLocationList = this.jsonData.filter(item => item.ProductName.includes(params['search']));

    }
  });

}

groupedData: { [key: string]: Product[] } = {};

  ngOnInit() {

    
    
    this.sortAndGroupData();
  }
  
  @ViewChild('dtEmployee') dtEmployee!: Table; // Add this reference

  applyGlobalFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    const normalizedValue = inputValue.replace(/-/g, '-');
    (this.dtEmployee as any).filterGlobal(normalizedValue, 'contains');
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.jsonData;
      return;
    }
  
    this.filteredLocationList = this.jsonData.filter(
      x => x.ProductName.toLowerCase().includes(text.toLowerCase())
    );
  }

  sortAndGroupData() {
    // Sort the data alphabetically by 'NAME OF THE PRODUCT'

    // Group the sorted data by the first letter of 'NAME OF THE PRODUCT'
    this.groupedData = this.jsonData.reduce((group: { [key: string]: Product[] }, item: Product) => {
        const firstLetter = item.ProductName[0].toUpperCase();
        if (!group[firstLetter]) {
          group[firstLetter] = [];
        }
        group[firstLetter].push(item);
        return group;
      }, {});

  }

  openGroups: Set<string> = new Set();

  // Toggle the visibility of the group
  toggleGroup(key: string) {
    if (this.openGroups.has(key)) {
      this.openGroups.delete(key);
    } else {
      this.openGroups.add(key);
    }
  }

  // Check if a group is open
  isGroupOpen(key: string): boolean {
    return this.openGroups.has(key);
  }

  trackByIndex(index: number): number {
    return index;
  }
}


