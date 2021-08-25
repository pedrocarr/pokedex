import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/Pokemon';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ) { 
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    this.httpClient.get(allPokemonsUrl).subscribe(data => {
      console.log(data);
    });
  }
}
