import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { UserResponse } from '../../shared/interfaces/user-response.interface';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrl: './user-detail-page.component.sass',
})
export class UserDetailPageComponent implements OnInit, AfterViewInit {
  id!: number;
  user!: null | UserResponse;
  private map!: any;

  constructor(
    private router: ActivatedRoute,
    private storageService: StorageService
  ) {}

  private async initMap() {
    const provider = new OpenStreetMapProvider();
    const results = await provider.search({
      query: String(this.user?.location),
    });

    this.map = L.map('map', {
      center: [results[0].y, results[0].x],
      zoom: 13,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 16,
        minZoom: 5,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    const circle = L.circle([results[0].y, results[0].x], {
      color: '#ff0000',
      radius: 3000,
    });

    circle.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.user = this.storageService.getUserById(this.id);
  }
}
