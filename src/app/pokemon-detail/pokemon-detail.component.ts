import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any = {};

  @Input()
  name!: string;
  @Output() close = new EventEmitter();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonDetail();
  }
  
  //Obtiene data del pokemon
  getPokemonDetail() {
    this.pokemonService.getPokemonDetails(this.name).subscribe(data => {
      this.pokemon = data;
    });
  }
}