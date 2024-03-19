import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PokemonListComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);