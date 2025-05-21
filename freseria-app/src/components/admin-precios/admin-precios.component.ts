import { Component, OnInit } from '@angular/core';
import { PreciosService } from '../../services/precios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-precios',
  imports: [ CommonModule ],
  templateUrl: './admin-precios.component.html',
  styleUrl: './admin-precios.component.css'
})
export class AdminPreciosComponent implements OnInit{
  precios: any[] = [];

  constructor(private preciosService: PreciosService) {}

  ngOnInit(): void {
    this.preciosService.getPrecios('leche').subscribe(data => {
      this.precios = data;
    });
  }
}
