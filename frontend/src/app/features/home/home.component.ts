import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  backendStatus = 'checking...';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get<{ status: string }>('health').subscribe({
      next: (res) => (this.backendStatus = res.status),
      error: () => (this.backendStatus = 'not reachable (is the backend running?)')
    });
  }
}
