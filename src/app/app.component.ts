import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Dividend Tracker</span>
      <nav>
        <a mat-button routerLink="/portfolio">Portfolio</a>
      </nav>
    </mat-toolbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    nav {
      margin-left: 20px;
    }
  `]
})
export class AppComponent {
  title = 'dividend-tracker';
}