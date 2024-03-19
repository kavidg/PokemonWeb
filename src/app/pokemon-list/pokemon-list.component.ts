import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: true,
  imports: [
    PokemonDetailComponent,
    CommonModule,
    RouterModule
  ],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  types: any[] = [];
  filteredPokemons: any[] = [];
  page = 1;
  limit = 10;
  selectedPokemon: string | null = null;
  selectedType: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
    this.getAllTypes();
  }
  
  //Devuelve a la pagina anterior
  getPreviousPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPokemons(this.page);
    }
  }
  
  //Obtiene listado de los pokemons
  loadPokemons(page = 1, limit = 10) {
    this.pokemonService.getPokemons(page, limit).subscribe(data => {
      this.pokemons = data.results;
      this.applyTypeFilter();
    });
  }
  
  //Obtiene los tipos de pokemon
  getAllTypes() {
    this.pokemonService.getAllTypes().subscribe((response: any) => {
      this.types = response.results;
    });
  }

  //Aplica filtro de los pokemons por tipo
  applyTypeFilter() {
    if (this.selectedType === '') {
      this.filteredPokemons = [...this.pokemons];
    } else {
      this.pokemonService.getPokemonByType(this.selectedType).subscribe((response: any) => {
        const pokemonUrls = response.pokemon.map((p: any) => p.pokemon.url);
        this.filteredPokemons = this.pokemons.filter((p: any) => pokemonUrls.includes(p.url));
      });
    }
  }

  //Reconoce el tipo seleccionado
  filterPokemonByType(event: any) {
    this.selectedType = event.target.value;
    this.applyTypeFilter();
  }

  //Cambia a pagina siguiente
  getNextPage() {
    this.page++;
    this.loadPokemons(this.page, this.limit);
  }

  //Muestra detalle del pokemon seleccionado
  showDetails(pokemonName: string) {
    this.selectedPokemon = (this.selectedPokemon === pokemonName) ? null : pokemonName;
  }
}


