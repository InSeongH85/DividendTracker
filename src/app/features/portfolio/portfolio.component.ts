import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  template: `
    <div class="portfolio-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Portfolio1</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>1.Portfolio content will be added here.</p>
        </mat-card-content>
      </mat-card>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Portfolio2</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>2.Portfolio content will be added here.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .portfolio-container {
      padding: 20px;
    }
  `]
})
export class PortfolioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}