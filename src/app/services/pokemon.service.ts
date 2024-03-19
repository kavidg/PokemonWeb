import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  //Endpoint de tipos de pokemon
  getAllTypes() {
    return this.http.get<any>('https://pokeapi.co/api/v2/type');
  }

  //Endpoint para obtener listado de pokemons
  getPokemons(page = 1, limit = 10) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`);
  }

  //Endpoint para obtener detalle del pokemon
  getPokemonDetails(name: string) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  //Endpoint para obtener todos los pokemons de determinado tipo
  getPokemonByType(type: string) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }
}

