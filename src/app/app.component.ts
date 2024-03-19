import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [
    RouterModule, // Importa el módulo de rutas
  ],
})
export class AppComponent {
  title = 'pokemon-app';
}
