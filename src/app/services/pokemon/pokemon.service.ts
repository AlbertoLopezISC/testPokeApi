import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DtoPokemon, DtoPokemonListResponse, DtoTypeDetail } from './dtos';
import { Mapper } from './mapper';
import { Pokemon, PokemonListResponse, TypeDetail } from 'src/app/interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(limit: number, offset: number): Observable<PokemonListResponse>{
    return this.httpClient.get<DtoPokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .pipe(map((dto: DtoPokemonListResponse) => Mapper.mapPokemonListResponse(dto)));
  }

  getPokemon(id: number|string): Observable<Pokemon>{
    return this.httpClient.get<DtoPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .pipe(map((dto: DtoPokemon) => Mapper.mapPokemon(dto)));
  }

  getTypeDetail(type: string): Observable<TypeDetail>{
    return this.httpClient.get<DtoTypeDetail>(`https://pokeapi.co/api/v2/type/${type}`)
    .pipe(map((dto: DtoTypeDetail) => Mapper.mapTypeDetail(dto)));
  }

  
}
